import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useWalletStore } from './wallet';

// Kategorier med ting man kan købe (ét stykke per kategori)
export type ItemCategory = 'hair' | 'clothes' | 'accessories';

// Alle fanerne. 'body' er hudfarve og ansigt, som er gratis og ikke ligger i catalog
export type Category = 'body' | ItemCategory;

export type SkinColor = 'mint' | 'sky' | 'peach' | 'rose' | 'lemon' | 'lilac';
export type FaceFeature = 'eyelashes' | 'cheeks';

// Rækkefølgen de vises i på Krop-fanen
export const skinColors: SkinColor[] = ['mint', 'sky', 'peach', 'rose', 'lemon', 'lilac'];
export const faceFeatures: FaceFeature[] = ['eyelashes', 'cheeks'];

export interface WardrobeItem {
    id: string;
    price: number;
    category: ItemCategory;
}

export interface Outfit {
    skin: SkinColor;
    face: FaceFeature[];
    hair?: string;
    clothes?: string;
    accessories?: string;
}

// Rækkefølgen tøjet tegnes i. Senere = ovenpå, så en hat kommer over tøjet
const layerOrder: ItemCategory[] = ['hair', 'clothes', 'accessories'];

export const useWardrobeStore = defineStore('wardrobe', () => {

    const walletStore = useWalletStore();

    const catalog: WardrobeItem[] = [
        { id: 'BlueOutfit', price: 100, category: 'clothes' },
        { id: 'GreenOutfit', price: 100, category: 'clothes' },
        { id: 'YellowOutfit', price: 100, category: 'clothes' },
        { id: 'PinkOutfit', price: 100, category: 'clothes' },
        { id: 'SpaceOutfit', price: 100, category: 'clothes' },
    ];

    const owned = ref<string[]>(['YellowOutfit']); // Start med en gratis outfit
    const equipped = ref<Outfit>({ skin: 'mint', face: ['cheeks'], clothes: 'YellowOutfit' }); // Det Kosmo har på lige nu
    const tryingOn = ref<Outfit>(copyOutfit(equipped.value)); // Det Kosmo har på i prøverummet

    // Kopi med sin egen face-liste, så tryingOn og equipped aldrig deler den samme liste
    function copyOutfit(outfit: Outfit): Outfit {
        return { ...outfit, face: [...outfit.face] };
    }

    function getItem(id: string): WardrobeItem | undefined {
        return catalog.find(item => item.id === id);
    }

    function itemsIn(category: Category): WardrobeItem[] {
        return catalog.filter(item => item.category === category);
    }

    function isOwned(id: string): boolean {
        return owned.value.includes(id);
    }

    const tryingOnList = computed<string[]>(() => {
        return layerOrder
            .map(category => tryingOn.value[category])
            .filter((id): id is string => id !== undefined);
    });

    const unOwnedTryingOn = computed<WardrobeItem[]>(() => {
        return tryingOnList.value
            .filter(id => !isOwned(id))
            .map(id => getItem(id))
            .filter((item): item is WardrobeItem => item !== undefined);
    });

    // Samlet pris for det man ikke ejer endnu
    const unOwnedPrice = computed<number>(() => {
        return unOwnedTryingOn.value.reduce((sum, item) => sum + item.price, 0);
    });

    const canSave = computed<boolean>(() => unOwnedTryingOn.value.length === 0);

    function tryOn(item: WardrobeItem): void {
        tryingOn.value[item.category] = item.id;
    }

    function setSkin(color: SkinColor): void {
        tryingOn.value.skin = color;
    }

    // Tænd/sluk for øjenvipper eller kinder
    function toggleFace(feature: FaceFeature): void {
        const face = tryingOn.value.face;

        tryingOn.value.face = face.includes(feature)
            ? face.filter(f => f !== feature)
            : [...face, feature];
    }

    function buyTryOn(): boolean {
        if (walletStore.wallet < unOwnedPrice.value) {
            return false;
        }

        walletStore.subtract(unOwnedPrice.value);
        owned.value.push(...unOwnedTryingOn.value.map(item => item.id));

        return true;
    }

    function saveTryOn(): void {
        if (!canSave.value) {
            return;
        }

        equipped.value = copyOutfit(tryingOn.value);
    }

    function cancelTryOn(): void {
        tryingOn.value = copyOutfit(equipped.value);
    }

    return {
        catalog,
        owned,
        equipped,
        tryingOn,
        tryingOnList,
        unOwnedTryingOn,
        unOwnedPrice,
        canSave,
        getItem,
        itemsIn,
        isOwned,
        tryOn,
        setSkin,
        toggleFace,
        buyTryOn,
        saveTryOn,
        cancelTryOn,
    };
});
