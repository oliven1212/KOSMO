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
    // Mål fra Figma: W 1275, H 93, radius 24
    width: 100%;
    max-width: 1275px;  // aldrig bredere end designet, men kan blive smallere på små skærme
    height: 93px;
    box-sizing: border-box; // padding og border tælles med i de 93px

    position: relative; // z-index virker kun med position
    z-index: 10;

    display: flex;
    align-items: center; // centrerer teksten lodret i de 93px
    padding: 0 24px;

    background-color: $modalBackground;
    border: 2px solid $modalStroke;
    border-radius: 24px;

    &__title {
        margin: 0;
        font-family: $font-main;
        font-weight: 700;
        font-size: 22px;
        color: $secondary;
    }
}
</style>
