<script setup lang="ts">
import { ListContainer, TabBar } from '@/components';
import { AcceptButton, TryAgainButton } from '@/components/buttons';
import { useRoute } from 'vue-router';
import { useWardrobe } from '@/composables/useWardrobe';

import MapLayout from '@/layouts/MapLayout.vue';
import MenuModal from '@/components/modals/MenuModal.vue';
import ClothingCard from '@/components/ClothingCard.vue';

const route = useRoute();
const { activeTab, tabs, cards, canSave, select, saveAndClose, cancelTryOn } = useWardrobe();
</script>

<template>
    <MapLayout>
        <MenuModal v-if="route.name === 'wardrobe'" title="Garderobe">
            <template #tabs>
                <TabBar :tabs="tabs" v-model="activeTab" />
            </template>

            <ListContainer :columns="4">
                <ClothingCard
                    v-for="card in cards"
                    :key="card.item.id"
                    v-bind="card.props"
                    @select="select(card.item)"
                ></ClothingCard>
            </ListContainer>

            <template #actions>
                <TryAgainButton aria-label="Fortryd" @click="cancelTryOn" />
                <AcceptButton :disabled="!canSave" @click="saveAndClose" />
            </template>
        </MenuModal>

        <MenuModal v-if="route.name === 'achievement'" title="Præstationer">
        </MenuModal>
    </MapLayout>
</template>

<style scoped lang="scss"></style>
