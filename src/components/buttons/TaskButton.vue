<script setup lang="ts">

import TaskIcon from '../icons/TaskIcon.vue';

defineProps<{
    to: string;     // ruten, f.eks. '/graense-minigame'
    label: string;  // tekst til skærmlæsere
    x: number;      // position på kortet
    y: number;
}>();

</script>

<template>
    <RouterLink :to="to" :aria-label="label" class="task-button">
        <TaskIcon :x="x" :y="y" width="112" height="116" />
    </RouterLink>
</template>

<style lang="scss" scoped>
.task-button {
    cursor: pointer;

    svg {
        transition: transform 0.15s;
        transform-box: fill-box;
        transform-origin: center;
    }

    &:hover svg {
        transform: scale(1.03);
    }
}
</style>
