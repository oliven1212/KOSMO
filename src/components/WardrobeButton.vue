<script setup lang="ts">
import WardrobeIcon from '@/components/icons/WardrobeIcon.vue';
</script>

<template>
    <!-- Et link og ikke en <button>, fordi et tryk skifter rute -->
    <RouterLink to="/garderobe" aria-label="Garderobe" class="wardrobeButton">
        <WardrobeIcon />
    </RouterLink>
</template>

<style lang="scss" scoped>
.wardrobeButton {
    display: block;

    // Den lilla cirkel er en del af SVG'en, så den skal bare skalere til pladsen
    svg {
        width: 100%;
        height: auto;
    }
}
</style>
