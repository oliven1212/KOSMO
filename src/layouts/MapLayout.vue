<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProfileInfo from '@/components/ProfileInfo.vue';
import Map from '@/components/icons/Map.vue';

</script>

<template>
    <div class="w-vw--100 h-vh--100 flex fillScreen background">
        <Map class="w--auto h--100 ms--auto" />
    </div>
    <div class="w-vw--100 h-vh--100 grid fillScreen asideSplit">    
        <ProfileInfo v-if="1==1"/>
        <RouterView/>
    </div>

</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    .fillScreen{
        position: absolute;
        overflow: hidden;
    }

    .background{
        background: c.$background;
        box-sizing: border-box;
        padding-right: 10%; //Moves the background left and right
    }

    .background svg{
        object-fit: contain;
    }

    .asideSplit{
        grid-template-columns: 20% auto;
    }
</style>
