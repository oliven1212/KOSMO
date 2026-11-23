<script setup lang="ts">
// boxId is sent with DragElement's dropped event, so the view knows which box was hit
defineProps<{ boxId: string }>();
</script>

<template>
    <!-- Box where a dragged element can be dropped; DragElement finds it by data-drop-box -->
    <div class="dropBox" :data-drop-box="boxId">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.dropBox {
    box-sizing: border-box;
    aspect-ratio: 3 / 2; // The parent sets one side (e.g. h--100 w--auto), the other follows
    border: 3px solid c.$modalStroke;
    border-radius: 16px;
    background-color: rgba(255, 251, 244, 0.5); // c.$white at half opacity, so the panel shows through
}
</style>
