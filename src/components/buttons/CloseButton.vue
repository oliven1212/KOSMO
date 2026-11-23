<script setup lang="ts">
import Back from '@/components/icons/Back.vue';
</script>

<template>
    <!-- Et link og ikke en <button>, fordi et tryk skifter rute (tilbage til kortet) -->
    <RouterLink
        :to="{ name: 'homepage' }"
        aria-label="Luk"
        class="
        button
        button--round
        button--danger
        button--drop-shadow
        closeButton">
        <Back />
    </RouterLink>
</template>

<style lang="scss" scoped>
.closeButton {
    padding: 8px;   // mindre end standard 12px, så ikonet ikke bliver for lille i en lille knap
}
</style>
