<!--
    QuizResultModal

    Shows the summary at the end of a game: how many answers were correct, a fixed info line, and the rewards (coins and XP).
    A button reads everything aloud. Knows nothing about which game it is used in. The parent supplies all the numbers.

    Usage in the parent example:
        const showQuizResult = ref(false);

        <QuizResultModal
            v-if="showSummary"
            :max-tasks="10"
            :correct-tasks="7"
            :coins-gotten="70"
            :xp-gotten="35"
            @close="showSummary = false"
            @back-to-map="goToMap"
        />

    Rules:
        - Always mount it with v-if, because it opens itself in onMounted.
        - Set all four numbers BEFORE showing it. They are read once when the modal is created, so changing them while it is open does nothing.
        - @close is sent by the wardrobe button, @back-to-map by "Tilbage til kortet". The parent must handle both and remove the modal, or it never disappears.
-->

<script setup lang="ts">
// Bring in the Vue tools we use: computed (derived value), onMounted (runs on appear) and ref (holds the dialog)
import { onMounted, ref } from 'vue';
import { CloseButton, TtsButton, WardrobeButton } from '@/components/buttons';

// Required prop: the parent must pass a complete TaskDescription
const props = defineProps<{
    /** How many tasks the game had in total */
    maxTasks: number;
    /** How many of them were answered correctly */
    correctTasks: number;
    /** Coins earned, shown and read aloud */
    coinsGotten: number;
    /** XP earned, shown and read aloud */
    xpGotten: number;
}>();

// Declare the events we send UP to the parent
const emit = defineEmits<{
    /** The user pressed the wardrobe button, the parent should remove the modal and open the wardrobe */
    close: [];
    /** The user pressed "Tilbage til kortet", the parent should remove the modal and show the map */
    backToMap: [];
}>();

// Will hold the <dialog> element itself, null until it exists on the page
const dialogRef = ref<HTMLDialogElement | null>(null);

const correctLine = props.correctTasks + ' ud af ' + props.maxTasks + ' rigtige';
const staticLine = 'Du får kun mønter for rigtige svar. Hvis du vil prøve igen, skal din lærer låse op for spørgsmålene igen.';
const rewardLine = 'Du får ' + props.coinsGotten + ' mønter og ' + props.xpGotten + ' XP';

// Title first, then the items, as one string for the read-aloud button
const spokenText = correctLine + '. ' + staticLine + ' ' + rewardLine;

// Runs once, right after the component has appeared on the page
onMounted((): void => {
    // Open the dialog as a modal (this gives the dark backdrop)
    dialogRef.value?.showModal();
});

// Runs when "Videre" is clicked
function onClose(): void {
    // Tell the parent: please remove me
    emit('close');
}
</script>

<template>
    <!-- ref="dialogRef" connects this element to the dialogRef variable above -->
    <!-- @cancel.prevent stops the Esc key from closing it -->
    <dialog ref="dialogRef" class="modal taskResultModal" @cancel.prevent>
        <p class="modal__title">
            {{ correctLine }}
        </p>
        <p class="modal__text">
            {{ staticLine }}
        </p>
        <p class="modal__text">
            {{ rewardLine }}
        </p>
        <div class="flex flex--just-between h--25">
            <TtsButton :text="spokenText" />
            <div class="flex flex--gapcol-5 ">
                <WardrobeButton @click="onClose" />
                <CloseButton @click="onClose" />
            </div>
        </div>
    </dialog>
</template>

<style scoped lang="scss">
.taskResultModal {
    width: 672px;
}
</style>