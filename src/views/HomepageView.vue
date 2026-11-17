<script setup lang="ts">
import { useRoute } from 'vue-router';
import MapLayout from '@/layouts/MapLayout.vue';
import MenuModal from '@/components/modals/MenuModal.vue';

const route = useRoute();
</script>

<template>
    <MapLayout>
        <!-- Vises kun, når man er på /garderobe -->
        <MenuModal v-if="route.name === 'garderobe'" title="Garderobe">
            <!-- faner og ListContainer kommer her -->
            <RouterLink to="/">Fortryd</RouterLink>
        </MenuModal>
    </MapLayout>
</template>

<style scoped lang="scss">

</style>
