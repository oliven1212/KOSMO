<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { LoadingScene } from '@/components/icons';
import { funFacts } from '@/data/funFacts';

const props = withDefaults(defineProps<{
    duration?: number;       // hvor længe loading screen vises, i millisekunder
    factInterval?: number;   // hvor ofte der kommer et nyt fact, i millisekunder
}>(), {
    duration: 8000,
    factInterval: 4000,
});

const loading = ref<boolean>(true);

// Start et tilfældigt sted, så man ikke altid ser det samme fact først
const factIndex = ref<number>(Math.floor(Math.random() * funFacts.length));

let factTimer: ReturnType<typeof setInterval> | undefined;
let loadingTimer: ReturnType<typeof setTimeout> | undefined;

onMounted((): void => {
    // Næste fact, og forfra når listen er slut (% giver resten, så 8 bliver til 0)
    factTimer = setInterval((): void => {
        factIndex.value = (factIndex.value + 1) % funFacts.length;
    }, props.factInterval);

    loadingTimer = setTimeout((): void => {
        loading.value = false;
        clearInterval(factTimer);
    }, props.duration);
});

// Stop timerne, hvis man forlader siden, mens den loader
onBeforeUnmount((): void => {
    clearInterval(factTimer);
    clearTimeout(loadingTimer);
});
</script>

<template>
    <div v-if="loading" class="loadingLayout">
        <LoadingScene class="loadingLayout__scene">
            <!-- aria-live, så en skærmlæser læser det nye fact op, når det skifter -->
            <div aria-live="polite">
                <p class="loadingLayout__title">FUN FACT!</p>
                <p class="loadingLayout__fact">{{ funFacts[factIndex] }}</p>
            </div>
        </LoadingScene>
    </div>

    <!-- Spillet vises først, når loading er færdig (v-if, så fx beskrivelsen åbner først der) -->
    <slot v-else />
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.loadingLayout {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: c.$loadingBackground;   // samme himmel, så kanterne ikke ses, når skærmen har et andet format

    &__scene {
        width: 100%;
        height: 100%;
    }

    &__title,
    &__fact {
        margin: 0;
    }

    &__title {
        font-weight: 700;
    }
}
</style>
