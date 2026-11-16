<script setup lang="ts">
<<<<<<< HEAD
import { ref } from 'vue';
import MapLayout from '@/layouts/MapLayout.vue';
import TaskConfirmModal from '@/components/modals/TaskConfirmationModal.vue';

let pendingCountry = ref('');

// Placeholder for your game logic, so checkAnswer exists
function checkAnswer(): void {
    // Prefer a real check later, this just proves the confirm event arrives
    console.log('Confirmed', pendingCountry.value);
}
</script>

<template>
    <button type="button" @click="pendingCountry = 'Denmark'">
        modal checker
    </button>
  <TaskConfirmModal
    v-if="pendingCountry"
    :text="`Er du sikker på, at du vil vælge ${pendingCountry}?`"
    @confirm="checkAnswer"
    @close="pendingCountry = null"
/>
  <MapLayout/>
=======
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView/>
>>>>>>> dev
</template>

<style scoped>
</style>
