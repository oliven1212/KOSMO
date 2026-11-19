<script lang="ts" setup>

// columns = det højeste antal kolonner. Er der ikke plads, bliver der færre,
// så et element aldrig bliver smallere end minItemWidth
withDefaults(defineProps<{
    columns: number;
    minItemWidth?: number;
}>(), {
    minItemWidth: 130,
});

</script>

<template>
    <div
        class="listContainer"
        :style="{ gridTemplateColumns: `repeat(auto-fill, minmax(max(${minItemWidth}px, (100% - ${columns - 1}rem) / ${columns}), 1fr))` }">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.listContainer {
    display: grid;
    gap: 1rem;
}

</style>
