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
import { onMounted, ref } from 'vue';
import { AcceptButton, TryAgainButton, TtsButton } from '@/components/buttons';

// Declare the data the PARENT must give us, here one string called text
defineProps<{
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
    <dialog ref="dialogRef" class="modal taskConfirmModal" @cancel.prevent>
        <!-- Show the text prop on screen -->
        <p class="modal__title">
            {{ text }}
        </p>

        <div class="modal__actions">
            <TtsButton :text="text" />
            <div class="flex flex--gapcol-4">
                <!-- Red button with icon: clicking calls onClose from the script -->
                <TryAgainButton aria-label="Prøv noget andet" @click="onClose" />

                <!-- Green button with a check mark: clicking calls onConfirm from the script -->
                <AcceptButton aria-label="Bekræft" @click="onConfirm" />
            </div>
        </div>

    </dialog>
</template>

<style scoped lang="scss">
// Sass colour functions, and the project's colour variables
@use 'sass:color';
@use '@/assets/scss/abstracts/colors' as *;

.taskConfirmModal {
    width: 672px;
    // See-through background: the modal colour at 85% opacity, so the map shows through (lower it for more)
    background-color: color.change($modalBackground, $alpha: 0.85);
    // Sit near the bottom of the screen instead of the middle, so the highlighted country stays visible
    margin: auto auto 24px;

    // No dark layer behind the modal, so the map is not dimmed
    &::backdrop {
        background: transparent;
    }
}
</style>