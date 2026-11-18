<script setup lang="ts">
</script>

<template>
    <header class="header">
        <h2 class="header__title">
            <slot>Overskrift</slot>
        </h2>
    </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as *;
@use '@/assets/scss/abstracts/fonts' as *;
@use '@/assets/scss/abstracts/sizes' as *;

.header {

    width: 100%;
    max-width: 1275px;
    height: $topBarHeight; // samme højde som XP-baren
    box-sizing: border-box;

    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;
    padding: 0 24px;

    background-color: $modalBackground;
    border: 3px solid $modalStroke;
    border-radius: 24px;

    &__title {
        margin: 0;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: $secondary;
    }
}
</style>
