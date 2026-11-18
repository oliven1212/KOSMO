<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TaskDescriptionModal from '@/components/modals/TaskDescriptionModal.vue';
import { countryGameDescription } from '@/content/tasksTexts';
// true means the modal is mounted, false removes it
const showDescription = ref(false);
</script>

<template>
    <!-- TEST ONLY: opens the modal -->
    <button type="button" class="testButton" @click="showDescription = true">
        Test description modal
    </button>

    <!-- Exists only while showDescription is true; @close sets it back to false -->
    <TaskDescriptionModal
        v-if="showDescription"
        :content="countryGameDescription"
        @close="showDescription = false"
    />
    <!-- Your normal pages -->
    <RouterView />
</template>

<style scoped>
/* TEST ONLY: pinned to the corner, so it doesn't move anything else */
.testButton {
    position: fixed;
    top: 8px;
    left: 8px;
    /* Keeps the button above the map */
    z-index: 10;
}
</style>