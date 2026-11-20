<script setup lang="ts">
import ThermometerElement from '@/components/games/ThermometerElement.vue';
import DropBox from '@/components/games/DropBox.vue';

</script>

<template>
    <div class="flex">
        <div class="flex flex--column">
            <ThermometerElement :temperature="45"/>
            <DropBox/>
        </div>
        <div class="flex flex--column">
            <ThermometerElement :temperature="-10"/>
            <DropBox/>
        </div>
        <div class="flex flex--column">
            <ThermometerElement :temperature="130"/>
            <DropBox/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

</style>
