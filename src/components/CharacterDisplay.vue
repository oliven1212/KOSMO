<script setup lang="ts">
import { ref, computed } from 'vue';

import Kosmo from '@/components/icons/Kosmo.vue';
import { loadClothing } from '@/utils/clothing';

// Names of equipped clothing, matching file names in components/icons/clothing/
const equipped = ref(['SpaceSuit']);

const equippedComponents = computed(() => {
    return equipped.value.map(loadClothing);
});
</script>

<template>
    <svg class="" viewBox="0 0 244 320" xmlns="http://www.w3.org/2000/svg">
        <Kosmo />
        <component v-for="(clothing, i) in equippedComponents" :key="equipped[i]" :is="clothing"/>
    </svg>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    svg{
        fill:c.$kosmoMint;
    }
</style>
