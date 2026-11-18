import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useWalletStore } from './wallet';

export type Category = 'body' | 'hair' | 'clothes' | 'accessories';

export interface WardrobeItem {
    id: string;
    price: number;
    category: Category;
}

export interface Outfit {
    body?: string;
    hair?: string;
    clothes?: string;
    accessories?: string;
}

// Rækkefølgen tøjet tegnes i. Senere = ovenpå, så en hat kommer over tøjet
const layerOrder: Category[] = ['body', 'hair', 'clothes', 'accessories'];

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
    const equipped = ref<Outfit>({ clothes: 'YellowOutfit' }); // Hvilket tøj der er på Kosmo lige nu
    const tryingOn = ref<Outfit>({ ...wearing.value }); // Hvilket tøj der er på Kosmo i prøverummet

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

    const canSave = computed<boolean>(() => unOwnedTryingOn.value.length === 0 );

    function tryOn(item: WardrobeItem): void {
        tryingOn.value[item.category] = item.id;
    };

    function buyTryingOn(): boolean {
        if (walletStore.wallet < unOwnedPrice.value) {
            return false;
        }

        walletStore.subtract(unOwnedPrice.value);
        owned.value.push(...unOwnedTryingOn.value.map(item => item.id));

        return true;

    }

    function save(): void {
        if (!canSave.value) return;
        equipped.value = { ...tryingOn.value };
    }

});
