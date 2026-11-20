<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { faceFeatures, skinColors, useWardrobeStore } from '@/stores/wardrobe';
import { bodySectionLabels, faceLabels, skinLabels } from '@/utils/labels';

const wardrobeStore = useWardrobeStore();
const { tryingOn } = storeToRefs(wardrobeStore);
</script>

<template>
    <div class="bodyPanel">
        <section class="bodyPanel__section">
            <h2 class="bodyPanel__title">{{ bodySectionLabels.face }}</h2>
            <div class="bodyPanel__chips">
                <button
                    v-for="feature in faceFeatures"
                    :key="feature"
                    type="button"
                    class="bodyPanel__chip"
                    :class="{ 'bodyPanel__chip--selected': tryingOn.face.includes(feature) }"
                    :aria-pressed="tryingOn.face.includes(feature)"
                    @click="wardrobeStore.toggleFace(feature)">
                    {{ faceLabels[feature] }}
                </button>
            </div>
        </section>

        <section class="bodyPanel__section">
            <h2 class="bodyPanel__title">{{ bodySectionLabels.skin }}</h2>
            <div class="bodyPanel__swatches">
                <button
                    v-for="color in skinColors"
                    :key="color"
                    type="button"
                    class="bodyPanel__swatch"
                    :aria-pressed="tryingOn.skin === color"
                    @click="wardrobeStore.setSkin(color)">
                    <span
                        class="bodyPanel__circle"
                        :class="[
                            `bodyPanel__circle--${color}`,
                            { 'bodyPanel__circle--selected': tryingOn.skin === color },
                        ]" />
                    <span class="bodyPanel__label">{{ skinLabels[color] }}</span>
                </button>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.bodyPanel {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: c.$secondary;

    &__section {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__title {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
    }

    &__chips,
    &__swatches {
        display: flex;
        flex-wrap: wrap;   // lægger sig på flere linjer på smalle skærme
        gap: 12px;
    }

    &__chip {
        padding: 8px 20px;
        border: 3px solid transparent;
        border-radius: 999px;
        background-color: c.$modalDark;
        color: c.$secondary;
        font: inherit;
        font-weight: bold;
        cursor: pointer;

        &--selected {
            border-color: c.$modalSelected;
            background-color: c.$modalBackground;
        }
    }

    &__swatch {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 0;
        border: none;
        background: none;
        font: inherit;
        color: c.$secondary;
        cursor: pointer;
    }

    &__circle {
        width: 48px;
        height: 48px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 3px solid transparent;

        // Samme farver som Kosmo: .bodyPanel__circle--mint, --sky osv.
        @each $name, $color in c.$skinColors {
            &--#{$name} {
                background-color: $color;
            }
        }

        &--selected {
            border-color: c.$modalSelected;
        }
    }

    &__label {
        font-size: 14px;
    }
}
</style>
