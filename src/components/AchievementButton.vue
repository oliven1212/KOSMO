<script setup lang="ts">
import { Achievements } from '@/components/icons';
</script>

<template>
    <RouterLink 
        :to=" { name: 'achievement' } " 
        aria-label="achievement" 
        class="button 
        button--round 
        button--drop-shadow 
        achievementButton">
        <Achievements />
    </RouterLink>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.achievementButton {
    background-color: c.$achievementButton;
}
</style>
