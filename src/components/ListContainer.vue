<script lang="ts" setup>

defineProps<{ columns: number }>();

</script>

<template>
    <div class="listContainer" :style ="{ gridTemplateColumns: `repeat(${columns}, 1fr)`}">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.listContainer {
    display: grid;
    gap: 1rem;
}

</style>
