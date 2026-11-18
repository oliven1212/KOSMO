<script setup lang="ts">
import Coins from '@/components/icons/Coins.vue';

defineProps<{
    amount: number
}>();


</script>

<template>
    <div class="flex flex--align-center flex--gap-1">
        <Coins /> <p class="m--0">{{ amount }}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    svg{
        height: 1.2rem;
    }

</style>
