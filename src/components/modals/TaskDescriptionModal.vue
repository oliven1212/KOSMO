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
import { computed, onMounted, ref } from 'vue';
import { TtsButton, StartButton } from '@/components/buttons';
import type { TaskDescription } from '@/content/tasksTexts';

// Required prop: the parent must pass a complete TaskDescription
const props = defineProps<{
    /** The title and list items that are shown and read aloud */
    content: TaskDescription;
}>();

// Declare the event we send UP to the parent
const emit = defineEmits<{
    /** The user pressed "Videre", the parent should remove the modal */
    close: [];
}>();

// Will hold the <dialog> element itself, null until it exists on the page
const dialogRef = ref<HTMLDialogElement | null>(null);

// Title first, then the items, as one string for the read-aloud button
const spokenText = computed((): string => {
    return [props.content.title, ...props.content.items].join('. ');
});

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
    <dialog ref="dialogRef" class="modal taskDescriptionModal h--auto" @cancel.prevent>
        <!-- The title from the content prop -->
        <p class="taskDescriptionModal__title">
            {{ content.title }}
        </p>

        <!-- One <li> per item; the item text itself is the key (fine as long as no two items are identical) -->
        <ul>
            <li v-for="item in content.items" :key="item">
                {{ item }}
            </li>
        </ul>

        <div class="flex flex--just-between h--25">
            <!-- spokenText is the title and items joined into one string -->
            <TtsButton :text="spokenText" />
            <!-- @click falls through to the <button> inside StartButton -->
            <StartButton @click="onClose" />
        </div>
    </dialog>
</template>

<style scoped lang="scss">
.taskDescriptionModal {
    width: 672px;
}
</style>