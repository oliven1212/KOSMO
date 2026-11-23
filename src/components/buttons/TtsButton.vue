<script setup lang="ts">
// Import the cleanup hook from vue
import { onUnmounted } from 'vue';
// Import the icon, the button only places it and doesn't draw anything itself
import { Speaker } from '@/components/icons';

// The data the parent must give us
const props = defineProps<{
    /** The sentence that is read aloud when the button is clicked */
    text: string;
}>();

// Runs when the button is clicked
function onSpeak(): void {
    // Stop earlier speech, so many clicks don't queue up
    speechSynthesis.cancel();

    // Create the "thing to say" from the text prop
    const utterance = new SpeechSynthesisUtterance(props.text);

    // Use a Danish voice
    utterance.lang = 'da-DK';
    // Speak a bit slower than normal (1 is normal speed)
    utterance.rate = 0.9;
    // Start speaking
    speechSynthesis.speak(utterance);
}

// Runs when the button is removed from the page
onUnmounted((): void => {
    // Stop speech so it doesn't keep talking after the button is gone
    speechSynthesis.cancel();
});
</script>

<template>
    <!-- Same classes as StartButton, only the background differs: button--tts gives the read-aloud colour -->
    <button type="button" class="button button--round button--tts button--drop-shadow ttsButton" aria-label="Læs op" @click="onSpeak">
        <!-- aria-hidden hides the picture from screen readers, the label above does the talking -->
        <Speaker aria-hidden="true" />
    </button>
</template>

<style scoped lang="scss">
/* Visible outline when using the keyboard */
.ttsButton:focus-visible {
    outline: 3px solid #1a3040;
    outline-offset: 4px;
    border-radius: 50%;
}
</style>