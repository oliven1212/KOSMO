<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProfileInfo from '@/components/ProfileInfo.vue';
import Map from '@/components/icons/Map.vue';

</script>

<template>
    <div class="fillScreen background">
        <Map/>
    </div>
    <div class="fillScreen asideSplit">    
        <ProfileInfo v-if="1==1"/>
        <RouterView/>
    </div>

</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    .fillScreen{
        height: 100vh;
        width: 100vw;
        position: absolute;
        overflow: hidden;
    }

    .background{
        background: c.$background;
        display: flex;
        box-sizing: border-box;
        padding-right: 10%; //Moves the background left and right
    }

    .background svg{
        object-fit: contain;
        width: auto;
        height: 100%;
        margin-left: auto;
    }

    .asideSplit{
        display: grid;
        grid-template-columns: 20% auto;
    }
</style>
