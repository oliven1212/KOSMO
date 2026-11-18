<script setup lang="ts">
// Import the cleanup hook from vue
import { onUnmounted } from 'vue';

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
    <!-- "button" brings your global flex centering, no border and pointer cursor -->
    <!-- No button--round (it clips overflow, which would cut off the shadow) and no button--tts (the SVG draws its own pink circle) -->
    <button type="button" class="button button--drop-shadow ttsButton" aria-label="Læs op" @click="onSpeak">
        <!-- aria-hidden hides the picture from screen readers, the label above does the talking -->
        <!-- width and height are removed, so CSS controls the size -->
        <svg class="ttsButton__icon" viewBox="0 0 167 166" fill="none" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <!-- The filter="url(#...)" attribute is removed here, the shadow is done in CSS instead -->
            <g>
                <rect width="167" height="161.964" rx="80.9819" class="ttsButton__bg" shape-rendering="crispEdges" />
                <rect x="2" y="2" width="163" height="157.964" rx="78.9819" stroke="white" stroke-width="4"
                    shape-rendering="crispEdges" />
                <path
                    d="M28.348 56.102C30.8082 55.431 45.7932 56.102 45.7932 56.102V103.07C45.7932 103.07 33.7156 104.68 28.348 103.07C22.9804 101.459 20.7438 95.2418 20.2964 92.3343C20.0727 87.6375 19.7596 76.231 20.2964 68.1794C20.8332 60.1278 25.8878 56.773 28.348 56.102Z"
                    fill="#1A3040" />
                <path
                    d="M54.5155 109.108V52.7472L75.9865 37.9859C84.5749 35.302 86.2747 42.2353 86.051 46.0375C86.051 46.0375 85.38 98.459 85.38 112.952C85.38 119.16 82.4392 125.124 75.9865 124.541C69.5337 123.957 57.6467 113.582 54.5155 109.108Z"
                    fill="#1A3040" />
                <path
                    d="M114.093 53.2859C116.872 51.4417 120.619 52.1992 122.463 54.9778C127.172 62.0719 128.947 71.6553 128.834 80.7026C128.719 89.826 126.677 99.3657 122.773 106.762C121.216 109.711 117.563 110.84 114.613 109.283C111.664 107.726 110.535 104.073 112.092 101.124C114.918 95.7714 116.661 88.2011 116.757 80.5505C116.854 72.8238 115.264 65.9682 112.401 61.656C110.557 58.8774 111.315 55.1303 114.093 53.2859Z"
                    fill="#1A3040" />
                <path
                    d="M129.938 39.8037C132.787 38.1886 136.468 39.0839 138.16 41.8034C144.587 52.1334 147.156 66.3918 146.993 80.2637C146.829 94.2137 143.894 108.669 138.427 119.717C137.012 122.577 133.435 123.801 130.439 122.45C127.443 121.099 126.161 117.685 127.576 114.825C132.139 105.604 134.845 92.8557 134.995 80.1357C135.145 67.3374 132.699 55.4582 127.843 47.6523C126.151 44.9328 127.089 41.4188 129.938 39.8037Z"
                    fill="#1A3040" />
                <path
                    d="M97.1642 60.212C99.6217 58.8349 102.936 59.4005 104.567 61.4753C108.732 66.7725 110.301 73.9286 110.201 80.6842C110.1 87.4967 108.294 94.6201 104.84 100.143C103.463 102.345 100.233 103.188 97.6243 102.025C95.0159 100.863 94.0174 98.1352 95.3943 95.9329C97.8934 91.9362 99.4356 86.2834 99.5205 80.5707C99.6061 74.8011 98.1995 69.682 95.6678 66.462C94.0367 64.3872 94.7067 61.5892 97.1642 60.212Z"
                    fill="#1A3040" />
            </g>
        </svg>
    </button>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstracts/colors' as c;

/* Only what .button doesn't already do: remove the browser's default padding and grey background */
.ttsButton {
    padding: 0;
    background: none;

    &__bg {
        /* Replace with your real variable name */
        fill: c.$readaloudButton;
    }

    /* The size of the icon, change this one value to resize it */
    &__icon {
        width: 6rem;
        height: auto;
        /* Same flat shadow as the SVG filter: 4px down, no blur, colour #909DA2 */
    }
}



/* Visible outline when using the keyboard, so you can see which button is focused */
.ttsButton:focus-visible {
    outline: 3px solid #1a3040;
    outline-offset: 4px;
    border-radius: 50%;
}
</style>