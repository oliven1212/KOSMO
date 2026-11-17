<script lang="ts" setup>
import HeaderElement from '@/components/HeaderElement.vue';

defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="p--2 flex flex--column flex--gap-2 menuModal">
        <HeaderElement>{{ title }}</HeaderElement>

        <div class="p--3 modal menuModal__content">
            <slot /> <!-- faner, ListContainer, knapper osv. -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menuModal {
    box-sizing: border-box;
    height: 100%;          // samme højde som ProfileInfo
    margin-right: 12vw;

    &__content {
        flex: 1;          
        overflow: auto;    // scroller, hvis der er mange stykker tøj
    }
}
</style>
