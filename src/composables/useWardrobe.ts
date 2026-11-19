import { computed, ref, watch, type ComputedRef, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useWardrobeStore, type Category, type WardrobeItem } from '@/stores/wardrobe';
import { categoryLabels, itemNames } from '@/utils/labels';

export interface WardrobeTab {
    id: Category;
    label: string;
    disabled: boolean;
}

// Kategorier der kan klikkes på lige nu. Tilføj 'hair' og 'accessories' her, når de er klar
const enabledCategories: Category[] = ['body', 'clothes'];

// Et kort i listen: selve stykket tøj + de props ClothingCard skal have
export interface ClothingCardData {
    item: WardrobeItem;
    props: {
        name: string;
        price: number;
        clothing: string;
        selected: boolean;
    };
}

// Det useWardrobe() giver tilbage
export interface UseWardrobe {
    activeTab: Ref<Category>;
    tabs: WardrobeTab[];
    cards: ComputedRef<ClothingCardData[]>;
    tryingOnList: ComputedRef<string[]>;
    unOwnedPrice: ComputedRef<number>;
    canSave: ComputedRef<boolean>;
    select: (item: WardrobeItem) => void;
    saveAndClose: () => Promise<void>;
    saveTryOn: () => void;
    cancelTryOn: () => void;
    buyTryOn: () => boolean;
}

export function useWardrobe(): UseWardrobe {
    const wardrobeStore = useWardrobeStore();
    const route = useRoute();
    const router = useRouter();

    // storeToRefs, så værdierne stadig er reaktive efter destructuring
    const { tryingOnList, unOwnedPrice, canSave } = storeToRefs(wardrobeStore);

    const activeTab = ref<Category>('clothes');

    const tabs: WardrobeTab[] = (Object.keys(categoryLabels) as Category[]).map(id => ({
        id,
        label: categoryLabels[id],
        disabled: !enabledCategories.includes(id),
    }));

    const cards = computed<ClothingCardData[]>(() => {
        return wardrobeStore.itemsIn(activeTab.value).map(item => ({
            item,
            props: {
                name: itemNames[item.id] ?? item.id,
                price: item.price,
                clothing: item.id,
                selected: wardrobeStore.tryingOn[item.category] === item.id,
            },
        }));
    });

    function select(item: WardrobeItem): void {
        wardrobeStore.tryOn(item);
    }

    // Gem (det grønne flueben): gemmer outfittet og lukker garderoben
    async function saveAndClose(): Promise<void> {
        if (!canSave.value) {
            return;
        }

        wardrobeStore.saveTryOn();
        await router.push({ name: 'homepage' });
    }

    watch(() => route.name, (newName, oldName) => {
        if (oldName === 'wardrobe' && newName !== 'wardrobe') {
            wardrobeStore.cancelTryOn();
        }
    });

    return {
        activeTab,
        tabs,
        cards,
        tryingOnList,
        unOwnedPrice,
        canSave,
        select,
        saveAndClose,
        saveTryOn: wardrobeStore.saveTryOn,
        cancelTryOn: wardrobeStore.cancelTryOn,
        buyTryOn: wardrobeStore.buyTryOn,
    };
}
