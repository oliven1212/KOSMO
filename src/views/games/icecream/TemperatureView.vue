<script setup lang="ts">
import { ref } from 'vue';
import ThermometerElement from '@/components/games/ThermometerElement.vue';
import DropBox from '@/components/games/DropBox.vue';
import DragElement from '@/components/games/DragElement.vue';
import { HeaderElement, TaskDescriptionModal } from '@/components';
import { waterPhasesGameDescription } from '@/data/tasksTexts';
import LoadingLayout from '@/layouts/LoadingLayout.vue';

// Show the task description modal when the game starts
const showDescription = ref(true);

// The temperature shown on each thermometer, left to right
const temperatures: number[] = [45, -10, 130];

// The water phases the player drags onto the thermometers, top to bottom
const waterPhases: string[] = ['Is', 'Damp', 'Vand'];
</script>

<template>
    <!-- Loading screen med fun facts, før spillet starter -->
    <LoadingLayout>
        <TaskDescriptionModal
            v-if="showDescription"
            :content="waterPhasesGameDescription"
            @close="showDescription = false"
        />
        <div class="w--100 h--100 grid grid--gapcol-4 grid--gaprow-4 p--4 temperatureGame">
            <!-- Task text across the top, spanning both columns -->
            <div class="grid--col-span-2 grid--just-center w--75">
                <HeaderElement>Placer disse tre faser af vand på termometeret ved den temperatur de hører til</HeaderElement>
            </div>

            <!-- Dark panel with the three thermometers, each with a drop box below -->
            <!-- min-h--0 lets the panel shrink to its row instead of growing to the thermometers' full height -->
            <section class="grid grid--cols-3 h--100 min-h--0 thermometerPanel">
                <div v-for="temperature in temperatures"
                    :key="temperature"
                    class="grid grid--align-center grid--just-items-center grid--gap-3 h--100 thermometerContainer"
                >
                    <!-- w--auto overrides the fallback width, so the width follows the height -->
                    <ThermometerElement class="h--100 w--auto" :temperature="temperature"/>
                    <!-- Height fills the 1fr row, width follows from the 3/2 aspect ratio, never wider than the column -->
                    <DropBox class="h--100 w--auto max-w--100"/>
                </div>
            </section>

            <!-- Column for the water phases the player drags onto the thermometers -->
            <!-- Three equal rows; each square fills its row's height, so all three always fit on screen -->
            <aside class="grid grid--rows-3 grid--gap-3 grid--just-items-center min-h--0">
                <DragElement v-for="phase in waterPhases" :key="phase" class="h--100 w--auto max-w--100">
                    {{ phase }}
                </DragElement>
            </aside>
        </div>
    </LoadingLayout>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.temperatureGame{
    position: absolute;
    overflow: hidden;
    background-color: c.$backgroundIcecream;
    grid-template-columns: 70% auto; // Game area, then the item column
    grid-template-rows: auto 1fr;

}

.thermometerPanel{
    grid-template-rows: 100%;
    border-radius: 24px 24px 0 0;
    background: linear-gradient(to bottom, c.$background 60%, transparent); // Fades out towards the bottom
}
.thermometerContainer{
    grid-template-rows: 4fr 1fr;
}
</style>
