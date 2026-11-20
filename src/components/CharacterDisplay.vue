<script setup lang="ts">
import { computed } from 'vue';

import Kosmo from '@/components/icons/Kosmo.vue';
import KosmoEyelashes from '@/components/face/KosmoEyelashes.vue';
import { loadClothing } from '@/utils/clothing';
import type { FaceFeature, SkinColor } from '@/stores/wardrobe';

const props = withDefaults(defineProps<{
    clothes?: string[];
    skin?: SkinColor;
    face?: FaceFeature[];
}>(), {
    clothes: () => ['YellowOutfit'],   // bruges når der ikke sendes noget ind (LoginView)
    skin: 'mint',
    face: () => ['cheeks'],
});

const equippedComponents = computed(() => {
    return props.clothes.map(loadClothing);
});
</script>

<template>
    <svg
        viewBox="0 0 244 320"
        xmlns="http://www.w3.org/2000/svg"
        :class="[
            `characterDisplay--${skin}`,
            { 'characterDisplay--noCheeks': !face.includes('cheeks') },
        ]">
        <Kosmo />
        <KosmoEyelashes v-if="face.includes('eyelashes')" /> <!-- over ansigtet, under tøjet -->
        <component v-for="(clothing, i) in equippedComponents" :key="props.clothes[i]" :is="clothing"/>
    </svg>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

// Én klasse per hudfarve: .characterDisplay--mint, --sky osv.
// Kosmos krop har ingen fill selv, så den arver farven herfra
@each $name, $color in c.$skinColors {
    .characterDisplay--#{$name} {
        fill: $color;
    }
}

// Kosmo.vue er et rent ikon uden script, så kinderne skjules herfra med CSS.
// :deep, fordi .cheeks ligger inde i Kosmo-komponentet
.characterDisplay--noCheeks :deep(.cheeks) {
    display: none;
}
</style>
