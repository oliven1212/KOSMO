<script setup lang="ts">
import Coins from '@/components/icons/Coins.vue';

defineProps<{
    amount: number
}>();

</script>

<template>
    <div class="flex ">
        <Coins /> <p>{{ amount }}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

</style>
