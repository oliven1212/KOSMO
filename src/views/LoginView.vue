<script setup lang="ts">
import MapLayout from '@/layouts/MapLayout.vue';
import ContainerModal from '@/components/modals/ContainerModal.vue';
import { useLoginStore } from '@/stores/login';

const loginStore = useLoginStore();

</script>

<template>
    <MapLayout>
        <div class="modal-overlay--dark">
            <ContainerModal class="m--auto">
                <button v-on:click="loginStore.login()"></button>
            </ContainerModal>
        </div>
    </MapLayout>

</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

</style>
