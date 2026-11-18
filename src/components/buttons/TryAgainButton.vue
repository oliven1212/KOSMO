<script setup lang="ts">
import TryAgainIcon from '@/components/icons/TryAgainIcon.vue';
</script>

<template>
    <!-- En <button>, fordi den udfører en handling. Forælderen tilføjer @click="..." -->
    <button
        type="button"
        aria-label="Prøv igen"
        class="
        button
        button--round
        button--danger
        button--drop-shadow">
        <TryAgainIcon />
    </button>
</template>
