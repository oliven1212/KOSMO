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

.header {
    width: 100%;
    box-sizing: border-box;
    padding: 24px 20px;

    background-color: $modalBackground;
    border: 2px solid $modalStroke;
    border-radius: 16px;

    &__title {
        margin: 0;
        font-family: $font-main;
        font-weight: 700;
        font-size: 22px;
        color: $secondary;
    }
}
</style>
