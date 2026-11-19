<script setup lang="ts">
import { BodyPanel, BuyBox, ListContainer, TabBar } from '@/components';
import { AcceptButton, TryAgainButton } from '@/components/buttons';
import { useRoute } from 'vue-router';
import { useWardrobe } from '@/composables/useWardrobe';

import MapLayout from '@/layouts/MapLayout.vue';
import MenuModal from '@/components/modals/MenuModal.vue';
import ClothingCard from '@/components/ClothingCard.vue';

const route = useRoute();
const {
    activeTab, tabs, cards, unOwnedPrice, canSave, canAfford,
    select, saveAndClose, cancelTryOn, buyTryOn,
} = useWardrobe();
</script>

<template>
    <MapLayout>
        <MenuModal v-if="route.name === 'wardrobe'" title="Garderobe">
            <template #tabs>
                <TabBar :tabs="tabs" v-model="activeTab" />
            </template>

            <BodyPanel v-if="activeTab === 'body'" />

            <ListContainer v-else :columns="4">
                <ClothingCard
                    v-for="card in cards"
                    :key="card.item.id"
                    v-bind="card.props"
                    @select="select(card.item)"
                ></ClothingCard>
            </ListContainer>

            <template #actions>
                <BuyBox
                    v-if="unOwnedPrice > 0"
                    class="wardrobe__buyBox"
                    :disabled="!canAfford"
                    @buy="buyTryOn" />
                <TryAgainButton aria-label="Fortryd" @click="cancelTryOn" />
                <AcceptButton :disabled="!canSave" @click="saveAndClose" />
            </template>
        </MenuModal>

        <MenuModal v-if="route.name === 'achievement'" title="Præstationer">
        </MenuModal>
    </MapLayout>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstracts/sizes' as s;

// Midt i modalen, uafhængigt af knapperne til højre
.wardrobe__buyBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;              // teksten på én linje, når der er plads
    max-width: calc(100% - 288px);   // men aldrig ind over knapperne (2 × 56px + mellemrum, på begge sider)

    // På små skærme er der ikke plads i midten: boksen får sin egen række over knapperne
    @media (max-width: s.$breakpointCompact) {
        position: static;
        transform: none;
        width: auto;
        max-width: none;
        flex-basis: 100%;
    }
}
</style>
