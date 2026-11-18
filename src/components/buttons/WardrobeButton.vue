<script setup lang="ts">
import { WardrobeIcon } from '@/components/icons';

</script>

<template>
    <!-- Et link og ikke en <button>, fordi et tryk skifter rute -->
    <RouterLink 
        :to="{ name: 'wardrobe' }" 
        aria-label="Garderobe" 
        class="
        button 
        button--round 
        button--drop-shadow
        wardrobeButton">
        <WardrobeIcon />
    </RouterLink>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.wardrobeButton {
    background-color: c.$wardrobeButton;
}
</style>
