<script setup lang="ts">
import { ref } from 'vue';

// Tells the parent which drop box the element was released over (null = none)
const emit = defineEmits<{ dropped: [boxId: string | null] }>();

// How far the element is moved from its starting place
const offset = ref({ x: 0, y: 0 });
// Whether the player is holding the element right now
const dragging = ref(false);

// Pointer position at grab, minus the offset, so the element doesn't jump to the finger
let grab = { x: 0, y: 0 };

//Pressed on the element: start dragging
function onPointerDown(event: PointerEvent): void {
    // Keep getting move/up events even if the finger moves outside the element
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    dragging.value = true;
    grab = { x: event.clientX - offset.value.x, y: event.clientY - offset.value.y };
}

//Movement: let the element follow it (only while dragging)
function onPointerMove(event: PointerEvent): void {
    if (!dragging.value) {
        return;
    }
    offset.value = { x: event.clientX - grab.x, y: event.clientY - grab.y };
}

//Released: snap into the drop box underneath, or jump back, and tell the parent which box it was
function onPointerUp(event: PointerEvent): void {
    if (!dragging.value) {
        return;
    }
    dragging.value = false;

    // elementsFromPoint returns every layer under the finger, so the dragged element itself doesn't hide the box
    const box = document
        .elementsFromPoint(event.clientX, event.clientY)
        .find((element): boolean => {
            return element.getAttribute('data-drop-box') !== null;
        });

    if (box) {
        // Move the element's centre onto the box's centre
        const boxRect = box.getBoundingClientRect();
        const elementRect = (event.currentTarget as HTMLElement).getBoundingClientRect();

        offset.value = {
            x: offset.value.x + (boxRect.left + boxRect.width / 2) - (elementRect.left + elementRect.width / 2),
            y: offset.value.y + (boxRect.top + boxRect.height / 2) - (elementRect.top + elementRect.height / 2),
        };
    } else {
        // Not over a drop box: jump back to the starting place
        offset.value = { x: 0, y: 0 };
    }

    // The id of the box (null if released outside a box)
    const boxId = box ? box.getAttribute('data-drop-box') : null;

    emit('dropped', boxId);
}
</script>

<template>
    <!-- An element the player can drag onto a DropBox -->
    <div
        class="grid grid--just-items-center grid--align-items-center dragElement"
        :class="{ 'dragElement--dragging': dragging }"
        :style="{ transform: `translate(${offset.x}px, ${offset.y}px)` }"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
    >
        <slot />
    </div>
</template>

<style lang="scss" scoped>
// Layout comes from the common grid classes in the template; only the drag behaviour lives here
.dragElement {
    cursor: grab;
    position: relative; // Needed for z-index while dragging
    touch-action: none; // Stops the iPad from scrolling the page instead of dragging
    user-select: none;
    transition: transform 0.2s ease; // Smooth jump back / snap into the box

    &--dragging {
        cursor: grabbing;
        z-index: 10; // Stay on top of everything while dragged
        transition: none; // Follow the finger without delay
    }
}
</style>
