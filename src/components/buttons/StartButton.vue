<script setup lang="ts">
import StartIcon from '@/components/icons/StartIcon.vue';
</script>

<template>
    <!-- En <button>, fordi den udfører en handling. Forælderen tilføjer @click="..." -->
    <button
        type="button"
        aria-label="Start"
        class="
        button
        button--round
        button--primary
        button--drop-shadow">
        <StartIcon />
    </button>
</template>
