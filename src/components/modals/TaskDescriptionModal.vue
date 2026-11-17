<!--
    TaskDescriptionModal

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
import TtsButton from '@/components/icons/Speaker.vue';

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
    <dialog ref="dialogRef" class="modal taskConfirmModal h-vh--25" @cancel.prevent>
        <!-- Show the text prop on screen -->
        <p class="taskConfirmModal__text">
            {{ text }}
        </p>

        <div class="flex flex--just-between h--66">
            <TtsButton :text="text" />
            <div class="flex flex--gapcol-4">
                <!-- Clicking calls onClose from the script -->
                <button type="button" class="button button--round button--danger" @click="onClose">
                    Prøv noget andet
                </button>

                <!-- Clicking calls onConfirm from the script -->
                <button type="button" class="button button--round button--primary" @click="onConfirm">
                    Bekræft
                </button>
            </div>
        </div>

    </dialog>
</template>

<style scoped lang="scss">
.taskConfirmModal {
    width: 672px;
}
</style>