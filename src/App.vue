<script setup lang="ts">
// ref holds the "is the modal visible" state
import { ref } from 'vue';
import { RouterView } from 'vue-router';
// Adjust the path and name to match your file
import TaskSummaryModal from '@/components/modals/QuizResultModal.vue';

// true means the modal is mounted, false removes it
const showSummary = ref(false);
</script>

<template>
    <!-- TEST ONLY: opens the modal -->
    <button type="button" class="testButton" @click="showSummary = true">
        Test summary modal
    </button>

    <!-- Exists only while showSummary is true -->
    <!-- @close and @back-to-map must both set showSummary to false, or the modal stays -->
    <TaskSummaryModal
        v-if="showSummary"
        :max-tasks="10"
        :correct-tasks="7"
        :coins-gotten="70"
        :xp-gotten="35"
        @close="showSummary = false"
    />

    <RouterView />
</template>

<style scoped>
/* TEST ONLY: pinned to the corner, so it doesn't move anything else */
.testButton {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 10;
}
</style>