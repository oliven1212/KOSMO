<script lang="ts" setup generic="T extends string">

export interface TabItem<T> {
    id: T;
    label: string;
    disabled?: boolean;
}

defineProps<{
    tabs: TabItem<T>[];
}>();

const activeTab = defineModel<T>({ required: true });

</script>

<template>
    <div class="tabBar" role="tablist">
        <button
        v-for="tab in tabs"
            :key="tab.id"
            type="button"
            role="tab"
            class="tabBar__tab"
            :class="{ 'tabBar__tab--active': tab.id === activeTab }"
            :aria-selected="tab.id === activeTab"
            :disabled="tab.disabled"
            @click="activeTab = tab.id">
            {{ tab.label }}
        </button>
    </div>

</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/assets/scss/abstracts/colors' as c;

.tabBar {
    display: flex;
    flex-wrap: wrap;           // fanerne må gå på to linjer, hvis der slet ikke er plads
    justify-content: center;
    gap: 8px;

    &__tab {
        padding: 6px 16px;
        border: none;
        border-radius: 999px;
        background-color: c.$achievementButton;
        color: c.$secondary;
        font: inherit;
        font-weight: bold;
        cursor: pointer;
        filter: drop-shadow(0px 4px 0px color.scale(c.$achievementButton, $lightness: -20%)); 

        &--active {
            background-color: c.$wardrobeButton;
            color: c.$white;
            filter: drop-shadow(0px 4px 0px color.scale(c.$wardrobeButton, $lightness: -25%));
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }


    }
}

</style>
