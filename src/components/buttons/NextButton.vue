<script setup lang="ts">
import NextArrowIcon from '@/components/icons/NextArrowIcon.vue';
</script>

<template>
    <!-- En <button>, fordi den udfører en handling. Forælderen tilføjer @click="..." -->
    <button
        type="button"
        aria-label="Næste"
        class="
        button
        button--round
        button--primary
        button--drop-shadow">
        <NextArrowIcon />
    </button>
</template>
