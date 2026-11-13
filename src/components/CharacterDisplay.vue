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
    <div>
        <svg class="px--2 py--3 w--100 kosmoContainer" viewBox="0 0 244 320" fill="#95DEAE" xmlns="http://www.w3.org/2000/svg">
            <Kosmo />
            <component v-for="(item, i) in equippedComponents" :key="equipped[i]" :is="item"/>
        </svg>
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
    svg{
        fill:c.$kosmoMint;
    }
</style>
