<script setup lang="ts">
import { useRoute } from 'vue-router';
import MapLayout from '@/layouts/MapLayout.vue';
import MenuModal from '@/components/modals/MenuModal.vue';

const route = useRoute();
</script>

<template>
    <MapLayout>

        <MenuModal v-if="route.name === 'garderobe'" title="Garderobe">
            <RouterLink :to="{ name: 'homepage' }">Fortryd</RouterLink>
        </MenuModal>

        <MenuModal v-if="route.name === 'achievement'" title="Præstationer">
            <RouterLink :to="{ name: 'homepage' }">Fortryd</RouterLink>
        </MenuModal>
    </MapLayout>
</template>

<style scoped lang="scss">

</style>
