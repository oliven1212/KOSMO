<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TaskResultModal from '@/components/modals/TaskResultModal.vue';
// true means the modal is mounted, false removes it
const showDescription = ref(false);
</script>

<template>
    <!-- TEST ONLY: opens the modal -->
    <button type="button" class="testButton" @click="showDescription = true">
        Test description modal
    </button>

    <!-- Exists only while showDescription is true; @close sets it back to false -->
    <TaskResultModal
        v-if="showDescription"
        :isCorrect="false"
        :fact="'Vidste du at...'"
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