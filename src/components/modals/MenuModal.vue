<script lang="ts" setup>
import HeaderElement from '@/components/HeaderElement.vue';

defineProps<{
    title: string; // teksten i headeren, f.eks. "Garderobe"
}>();
</script>

<template>
    <!-- p--2 og flex--gap-2 er de samme som i ProfileInfo, så kanterne flugter -->
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

    &__content {
        flex: 1;           // fylder pladsen under headeren, så bunden flugter med Kosmo-kortet
        overflow: auto;    // scroller, hvis der er mange stykker tøj
    }
}
</style>
