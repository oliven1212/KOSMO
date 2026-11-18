<script lang="ts" setup>
import HeaderElement from '@/components/HeaderElement.vue';
import CloseButton from '@/components/buttons/CloseButton.vue';

defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="p--2 flex flex--column flex--gap-2 menuModal">
        <HeaderElement>{{ title }}</HeaderElement>

        <div class="p--3 modal menuModal__content">
            <!-- Toprække: faner i midten, luk-knap til højre. Ligger over indholdet, ikke ovenpå det -->
            <div class="menuModal__top">
                <div class="menuModal__tabs">
                    <slot name="tabs" /> <!-- fx <template #tabs><TabBar ... /></template> -->
                </div>
                <CloseButton class="menuModal__close" />
            </div>

            <slot /> <!-- ListContainer, knapper osv. -->
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
        display: flex;
        flex-direction: column;
        gap: 24px;         // luft mellem toprækken og listen
    }

    &__top {
        display: grid;
        grid-template-columns: 44px 1fr 44px;   // tom kolonne til venstre, så fanerne står i midten
        align-items: center;
        gap: 16px;
    }

    &__tabs {
        grid-column: 2;
        display: flex;
        justify-content: center;
    }

    &__close {
        grid-column: 3;
        width: 44px;
        height: 44px;
    }
}
</style>
