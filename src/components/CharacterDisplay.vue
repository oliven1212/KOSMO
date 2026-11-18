<script setup lang="ts">
import { computed } from 'vue';

import Kosmo from '@/components/icons/Kosmo.vue';
import { loadClothing } from '@/utils/clothing';

const props = withDefaults(defineProps<{
    clothes?: string[];
    }>(), {
    clothes: () => ['YellowOutfit'],   // bruges når der ikke sendes noget ind (ProfileInfo, LoginView)
});

const equippedComponents = computed(() => {
    return props.clothes.map(loadClothing);
});
</script>

<template>
    <svg viewBox="0 0 244 320" xmlns="http://www.w3.org/2000/svg">
        <Kosmo />
        <component v-for="(clothing, i) in equippedComponents" :key="props.clothes[i]" :is="clothing"/>
    </svg>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    svg{
        fill:c.$kosmoMint;
    }
</style>
