<script setup lang="ts">
</script>

<template>
    <!-- Placeholder for an element the player can drag (no logic yet) -->
    <div class="dragElement">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.dragElement {
    box-sizing: border-box;
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
    border: 3px solid c.$modalStroke;
    border-radius: 16px;
    background-color: c.$modalBackground;
    color: c.$secondary;
    font-weight: bold;
    cursor: grab;
}
</style>
