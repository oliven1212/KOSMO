<script setup lang="ts">

import { Achievements } from '@/components/icons';

</script>

<template>
    <RouterLink :to=" { name: 'achievement' } " aria-label="achievement" class="achievementButton">
        <Achievements />
    </RouterLink>
</template>

<style lang="scss" scoped>
.achievementButton svg {
    width: 100%;
    height: auto;
}
</style>
