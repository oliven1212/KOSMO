<script setup lang="ts">
import Kosmo from '@/components/icons/Kosmo.vue';

</script>

<template>
    <div>
        <Kosmo class="p--4 w--100 kosmoContainer"/>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    .kosmoContainer{
        background-color: c.$kosmoBackground;
        box-sizing: border-box;
        border: none;
        border-radius: 24px;
    }
</style>
