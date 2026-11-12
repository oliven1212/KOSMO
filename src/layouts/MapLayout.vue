<script setup lang="ts">
import { RouterView } from 'vue-router';
import CharacterDisplay from '@/components/CharacterDisplay.vue';
import Map from '@/components/icons/Map.vue';

</script>

<template>
    <!-- Baggrunden: ligger fast bag alt andet -->
    <Map class="background"/>

    <!-- Alt indhold (header, modaler osv.) ligger ovenpå -->
    <div class="content">
        <CharacterDisplay v-if="1==1"/>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
    .background{
        position: fixed; // tages ud af det normale flow, så den ikke skubber indholdet ned
        inset: 0;        // top/right/bottom/left: 0 -> fylder hele skærmen
        z-index: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        object-fit: contain;
    }

    .content{
        position: relative; // z-index virker kun på elementer med position
        z-index: 1;         // højere end baggrunden -> ligger ovenpå
    }
</style>
