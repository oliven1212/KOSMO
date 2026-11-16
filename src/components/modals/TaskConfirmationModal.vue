<!--
    TaskConfirmationModal

    Asks "are you sure?" before the game accepts an answer. Knows nothing about the game itself.

    Usage in the parent example:
        const pendingCountry = ref<string | null>(null);

        <TaskConfirmModal
            v-if="pendingCountry"
            :text="`Er du sikker på, at du vil vælge ${pendingCountry}?`"
            @confirm="checkAnswer"
            @close="pendingCountry = null"
        />

    Rules:
        - Always mount it with v-if, because it opens itself in onMounted.
        - @close must clear the parent's state, or the modal never disappears.
        - confirm is emitted before close, so the parent still has its data in @confirm.
-->

<script setup lang="ts">
// Bring in the Vue tools we use: ref (holds a value), and two lifecycle hooks
import { onMounted, onUnmounted, ref } from 'vue';

// Declare the data the PARENT must give us, here one string called text
const props = defineProps<{
    /** The sentence that is shown on screen AND read aloud */
    text: string;
}>();

// Declare the events we can send UP to the parent
const emit = defineEmits<{
    /** The user pressed "Bekræft" */
    confirm: [];
    /** The modal wants to be removed, emitted after confirm and after "Prøv noget andet" */
    close: [];
}>();

// Will hold the <dialog> element itself, null until it exists on the page
const dialogRef = ref<HTMLDialogElement | null>(null);

// Runs once, right after the component has appeared on the page
onMounted((): void => {
    // Open the dialog as a modal (this gives the dark backdrop)
    dialogRef.value?.showModal();
});

// Runs once, right before the component is removed from the page
onUnmounted((): void => {
    // Stop any speech still playing, so it doesn't talk after the modal is gone
    speechSynthesis.cancel();
});

// Runs when the text-to-speech button is clicked
function onSpeak(): void {
    // Stop earlier speech, so many clicks don't queue up
    speechSynthesis.cancel();

    // Create the "thing to say" from the text prop
    const utterance = new SpeechSynthesisUtterance(props.text);

    // Tell the browser to use a Danish voice
    utterance.lang = 'da-DK';
    // Speak a bit slower than normal (1 is normal speed)
    utterance.rate = 0.9;
    // Start speaking
    speechSynthesis.speak(utterance);
}

// Runs when "Prøv noget andet" is clicked
function onClose(): void {
    // Tell the parent: please remove me
    emit('close');
}

// Runs when "Bekræft" is clicked
function onConfirm(): void {
    // First tell the parent: the user confirmed
    emit('confirm');
    // Then tell the parent: please remove me
    emit('close');
}
</script>

<template>
    <!-- ref="dialogRef" connects this element to the dialogRef variable above -->
    <!-- @cancel.prevent stops the Esc key from closing it -->
    <dialog
        ref="dialogRef"
        class="taskConfirmModal"
        @cancel.prevent
    >
        <!-- Show the text prop on screen -->
        <p class="taskConfirmModal__text">
            {{ text }}
        </p>

        <!-- type="button" makes sure the button does nothing except what we tell it -->
        <button type="button" @click="onSpeak">
            Læs op
        </button>

        <!-- Clicking calls onClose from the script -->
        <button type="button" @click="onClose">
            Prøv noget andet
        </button>

        <!-- Clicking calls onConfirm from the script -->
        <button type="button" @click="onConfirm">
            Bekræft
        </button>
    </dialog>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstracts/colors' as c;

/* The box itself, semi-transparent */
.taskConfirmModal {
    background: rgba($color: c.$modalBackground, $alpha: 0.8);
}

/* The dark layer behind the box, exists only when opened with showModal() */
.taskConfirmModal::backdrop {
    background: c.$overlay;
}

/* Big text */
.taskConfirmModal__text {
    font-size: 2rem;
}
</style>