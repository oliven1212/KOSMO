<script setup lang="ts">
// Import the icon, the button only places it and doesn't draw anything itself
import { Start } from '@/components/icons';
</script>

<template>
    <!-- No click handler here: @click from the parent falls through to this root <button> automatically -->
    <!-- aria-label gives the button a name, since it has no visible text -->
    <button type="button" class="button button--drop-shadow startButton" aria-label="Videre">
        <!-- aria-hidden hides the picture from screen readers, the label above does the talking -->
        <Start aria-hidden="true" />
    </button>
</template>

<style scoped lang="scss">
/* Remove the browser's default grey background, the icon draws its own colours */
.startButton {
    background: none;
}

/* Visible outline when using the keyboard */
.startButton:focus-visible {
    outline: 3px solid #1a3040;
    outline-offset: 4px;
    border-radius: 50%;
}
</style>