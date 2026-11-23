<script setup lang="ts">
import { computed, ref } from 'vue';
import { DragElement, DropBox, HeaderElement, TaskConfirmationModal, TaskDescriptionModal, TaskResultModal, ThermometerElement } from '@/components';
import QuizResultModal from '@/components/modals/QuizResultModal.vue';
import { ExitButton } from '@/components/buttons';
import { waterPhasesGameDescription } from '@/data/tasksTexts';
import { calculateReward, giveReward, type Reward } from '@/data/rewards';
import LoadingLayout from '@/layouts/LoadingLayout.vue';
import { Glass, Pot, Snowman } from '@/components/icons/games';
// Same phases as the border game; this game has no data to load, so it starts in playing
import type { GamePhase } from '@/data/types/gamePhase';

// This game has a single turn (the border game calls its count totalTurns too)
const TOTAL_TURNS = 1;

// Show the task description modal when the loading screen is done (LoadingLayout sends done)
const showDescription = ref(false);

// The water phases the player drags onto the thermometers, top to bottom, with the temperature each one belongs to
const waterPhases = [
    { name: 'Is', icon: Snowman, temperature: -10 },
    { name: 'Damp', icon: Pot, temperature: 130 },
    { name: 'Vand', icon: Glass, temperature: 45 },
];

// Shown in the result modal, whatever the answer was
const resultFact = 'Vand er is under 0 °C, flydende mellem 0 og 100 °C, og bliver til damp over 100 °C.';

const phase = ref<GamePhase>('playing');
// Which drop box each water phase is in right now: phase name -> box id
const placements = ref<Record<string, string>>({});
// Whether the latest confirmed answer was right (for the result modal)
const lastAnswerCorrect = ref(false);
// Number of correct answers (for the reward and the summary)
const correctCount = ref(0);
// Goes up on every restart; it is part of the drag elements' key, so Vue recreates them at their starting place
const round = ref(0);

// Coins and XP come from the shared formula, like in the border game
const reward = computed((): Reward => {
    return calculateReward(correctCount.value, TOTAL_TURNS);
});

// A drag element was released: over a drop box (boxId) or outside (null)
function onDropped(phaseName: string, boxId: string | null): void {
    if (phase.value !== 'playing') {
        return;
    }

    if (boxId === null) {
        delete placements.value[phaseName];
    } else {
        placements.value[phaseName] = boxId;
    }

    // Ask for confirmation once all three are placed, each in its own box
    const boxesUsed = new Set(Object.values(placements.value));

    if (boxesUsed.size === waterPhases.length) {
        phase.value = 'confirming';
    }
}

// "Bekræft": check every water phase against its own temperature
function confirmAnswer(): void {
    if (phase.value !== 'confirming') {
        return;
    }

    const correct = waterPhases.every(
        (waterPhase): boolean => {
            return placements.value[waterPhase.name] === String(waterPhase.temperature);
        },
    );

    // Store the result for the result modal
    lastAnswerCorrect.value = correct;
    // Count correct answers for the final score
    if (correct) {
        correctCount.value += 1;
    }
    phase.value = 'result';
}

// "Prøv noget andet": start over with every drag element back in its place
// (the modal also sends close after confirm, so only react while confirming)
function restart(): void {
    if (phase.value !== 'confirming') {
        return;
    }

    placements.value = {};
    round.value += 1;
    phase.value = 'playing';
}

// The result modal was closed: the game is over, pay out once and show the summary
function finish(): void {
    if (phase.value !== 'result') {
        return;
    }

    giveReward(reward.value);
    phase.value = 'finished';
}
</script>

<template>
    <!-- Loading screen med fun facts, før spillet starter -->
    <LoadingLayout @done="showDescription = true">
        <TaskDescriptionModal
            v-if="showDescription"
            :content="waterPhasesGameDescription"
            @close="showDescription = false"
        />

        <!-- All three are placed: "Bekræft" checks the answer, "Prøv noget andet" starts over -->
        <TaskConfirmationModal
            v-if="phase === 'confirming'"
            text="Er du sikker på dit valg?"
            @confirm="confirmAnswer"
            @close="restart"
        />

        <!-- Right or wrong, with the fact about the water phases -->
        <TaskResultModal
            v-if="phase === 'result'"
            :is-correct="lastAnswerCorrect"
            :fact="resultFact"
            @close="finish"
        />

        <!-- Summary after the (only) task -->
        <QuizResultModal
            v-if="phase === 'finished'"
            :max-tasks="TOTAL_TURNS"
            :correct-tasks="correctCount"
            :coins-gotten="reward.coins"
            :xp-gotten="reward.xp"
        />
        <div class="w--100 h--100 grid grid--gapcol-4 grid--gaprow-4 p--4 temperatureGame">
            <!-- Top row across both columns: exit button on the left, task text in the middle, help button on the right -->
            <div class="grid grid--align-items-center grid--gap-3 grid--col-span-2 topRow">
                <!-- Asks "are you sure?" before going back to the map -->
                <ExitButton class="topRow__exit" />
                <HeaderElement>Placer disse tre faser af vand på termometeret ved den temperatur de hører til</HeaderElement>
                <!-- Small button that reopens the task description; button + modal give the frame and colours -->
                <button type="button" class="button modal topRow__help" aria-label="Vis opgaven" @click="showDescription = true">
                    ?
                </button>
            </div>

            <!-- Dark panel with the three thermometers, each with a drop box below -->
            <!-- min-h--0 lets the panel shrink to its row instead of growing to the thermometers' full height -->
            <section class="grid grid--cols-3 h--100 min-h--0 thermometerPanel">
                <div v-for="temperature in [45, -10, 130]"
                    :key="temperature"
                    class="grid grid--align-center grid--just-items-center grid--gap-3 h--100 thermometerContainer"
                >
                    <!-- w--auto overrides the fallback width, so the width follows the height -->
                    <ThermometerElement class="h--100 w--auto" :temperature="temperature"/>
                    <!-- Height fills the 1fr row, width follows from the 3/2 aspect ratio, never wider than the column -->
                    <DropBox class="h--100 w--auto max-w--100" :box-id="String(temperature)"/>
                </div>
            </section>

            <!-- Column for the water phases the player drags onto the thermometers -->
            <!-- Three equal rows; each square fills its row's height, so all three always fit on screen -->
            <aside class="grid grid--rows-3 grid--gap-3 grid--just-items-center min-h--0">
                <!-- round in the key: a restart recreates the elements, which puts them back at their starting place -->
                <DragElement
                    v-for="waterPhase in waterPhases"
                    :key="`${waterPhase.name}-${round}`"
                    :aria-label="waterPhase.name"
                    class="h--100 w--auto max-w--100"
                    @dropped="onDropped(waterPhase.name, $event)"
                >
                    <!-- Icon fills the height; width follows the icon's own proportions -->
                    <component :is="waterPhase.icon" class="h--100 w--auto" />
                </DragElement>
            </aside>
        </div>
    </LoadingLayout>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
@use '@/assets/scss/abstracts/sizes' as s;

// Exit button | header | help button of the same width, so the header stays centred
.topRow{
    grid-template-columns: s.$topBarHeight 1fr s.$topBarHeight;

    &__exit{
        width: s.$topBarHeight;
        height: s.$topBarHeight;
    }

    // Size and text; the frame and colours come from the common button and modal classes
    &__help{
        width: s.$topBarHeight;
        height: s.$topBarHeight;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 22px;

        // Tablets have no hover, so give a press effect instead
        &:active{
            background: c.$modalDark;
        }
    }
}

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
