<script setup lang="ts">
import { useRoute } from 'vue-router';
import MapLayout from '@/layouts/MapLayout.vue';
import MenuModal from '@/components/modals/MenuModal.vue';
import { ListContainer, ClothingCard } from '@/components';

const route = useRoute();
</script>

<template>
    <MapLayout>

        <MenuModal v-if="route.name === 'wardrobe'" title="Garderobe">
            <ListContainer :columns="4">
                <ClothingCard name="Blå outfit" :price="100" clothing="BlueOutfit" />
                <ClothingCard name="Grøn sweater" :price="100" clothing="GreenOutfit" />
                <ClothingCard name="Gul hoodie" :price="100" clothing="YellowOutfit" />
                <ClothingCard name="Lyserød kjole" :price="100" clothing="PinkOutfit" />
                <ClothingCard name="Rumdragt" :price="100" clothing="SpaceOutfit" selected />
            </ListContainer>
            <RouterLink :to="{ name: 'homepage' }">Fortryd</RouterLink>
        </MenuModal>

        <MenuModal v-if="route.name === 'achievement'" title="Præstationer">
            <RouterLink :to="{ name: 'homepage' }">Fortryd</RouterLink>
        </MenuModal>
    </MapLayout>
</template>

<style scoped lang="scss"></style>
