<!--
    TaskDescriptionModal

    Shows the instructions for a task: a title and a list of steps, with a button that reads them aloud.
    Knows nothing about which game it is used in. The parent decides which text to show.

    Usage in the parent example:
        import { countryGameDescription } from '@/content/tasksTexts';

        const showDescription = ref(true);

        <TaskDescriptionModal
            v-if="showDescription"
            :content="countryGameDescription"
            @close="showDescription = false"
        />

    Rules:
        - Always mount it with v-if, because it opens itself in onMounted.
        - content must be a complete TaskDescription (title and items), never an empty object.
        - @close must clear the parent's state, or the modal never disappears.
-->

<script setup lang="ts">
// Bring in the Vue tools we use: computed (derived value), onMounted (runs on appear) and ref (holds the dialog)
import { onMounted, ref } from 'vue';
import { TtsButton, NextButton } from '@/components/buttons';

// Required prop: the parent must pass a complete TaskDescription
const props = defineProps<{
    /** Is the answer correct as a bool */
    isCorrect: boolean;
    /** Any fact as a string*/
    fact: string;
}>();

// Declare the event we send UP to the parent
const emit = defineEmits<{
    /** The user pressed next, the parent should keep assignment moving */
    close: [];
}>();

// Will hold the <dialog> element itself, null until it exists on the page
const dialogRef = ref<HTMLDialogElement | null>(null);

const answerText = props.isCorrect ? 'Rigtigt!' : 'Forkert';

// Title first, then the items, as one string for the read-aloud button
const spokenText = answerText + '. ' + props.fact;

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
        <!-- The title from the content prop -->
        <p class="modal__title">
            {{ answerText }}
        </p>

        <p class="modal__text">
            {{ fact }}
        </p>

        <div class="flex flex--just-between h--25">
            <!-- spokenText is the title and items joined into one string -->
            <TtsButton :text="spokenText" />
            <!-- @click falls through to the <button> inside StartButton -->
            <NextButton @click="onClose" />
        </div>
    </dialog>
</template>

<style scoped lang="scss">
.taskResultModal {
    width: 672px;
}
</style>