<script setup lang="ts">
import { Fire, Snowflake, Sun, Thermometer } from '@/components/icons/games';

defineProps<{
    temperature: number; // Temperature in degrees (-30 to 150)
}>();
</script>

<template>
    <!-- One SVG in the thermometer's coordinates; the nested icon SVGs are placed with x/y/width/height -->
    <!-- The thermometer body spans x 50-261, so the viewBox is 311 wide to give it 50 units on both sides and keep it centered -->
    <svg class="thermometerElement" width="311" height="auto" viewBox="0 0 311 775" xmlns="http://www.w3.org/2000/svg">
        <!-- The components' own width/height are used, so only the icon's position is set here -->
        <Thermometer :temperature="temperature" />
        <!-- Weather icon in the top left corner: snowflake at 0 and below, sun below 100, fire from 100 and up -->
        <Snowflake v-if="temperature <= 0" x="14" y="14" overflow="visible" :temperature="temperature" />
        <Sun v-else-if="temperature < 100" x="14" y="14" overflow="visible" :temperature="temperature" />
        <Fire v-else x="14" y="14" overflow="visible" :temperature="temperature" />
    </svg>
</template>

<style lang="scss" scoped>
.thermometerElement {
    display: block;
}
</style>
