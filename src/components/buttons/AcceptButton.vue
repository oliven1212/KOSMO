<script setup lang="ts">
import AcceptIcon from '@/components/icons/AcceptIcon.vue';
</script>

<template>
    <!-- En <button>, fordi den udfører en handling. Forælderen tilføjer @click="..." -->
    <button
        type="button"
        aria-label="Gem"
        class="
        button
        button--round
        button--success
        button--drop-shadow">
        <AcceptIcon />
    </button>
</template>
