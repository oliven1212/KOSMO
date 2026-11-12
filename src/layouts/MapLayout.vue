<script setup lang="ts">
import { RouterView } from 'vue-router';
import CharacterDisplay from '@/components/CharacterDisplay.vue';
import Map from '@/components/icons/Map.vue';

</script>

<template>
    <CharacterDisplay v-if="1==1"/>
    <RouterView />
    <Map class="background"/>
</template>

<style lang="scss" scoped>
    .background{
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        object-fit: contain;
    }
</style>
