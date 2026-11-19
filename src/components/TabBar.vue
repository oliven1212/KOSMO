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
@use '@/assets/scss/abstracts/colors' as c;

.tabBar {
    display: flex;
    gap: 12px;

    &__tab {
        padding: 8px 24px;
        border: none;
        border-radius: 999px;
        background-color: c.$achievementButton;
        color: c.$secondary;
        font: inherit;
        font-weight: bold;
        cursor: pointer;

        &--active {
            background-color: c.$wardrobeButton;
            color: c.$white;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }


    }
}

</style>
