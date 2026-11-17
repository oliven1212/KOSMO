<script setup lang="ts">
import WardrobeIcon from '@/components/icons/WardrobeIcon.vue';
</script>

<template>
    <!-- Et link og ikke en <button>, fordi et tryk skifter rute -->
    <RouterLink :to="{ name: 'wardrobe' }" aria-label="Garderobe" class="wardrobeButton">
        <WardrobeIcon />
    </RouterLink>
</template>

<style lang="scss" scoped>
.wardrobeButton {
    display: block;

    svg {
        display: block; // fjerner den ekstra luft under SVG'en (inline-elementer får plads til tekst)
        width: 100%;
        height: auto;
    }
}
</style>
