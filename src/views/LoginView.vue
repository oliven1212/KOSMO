<script setup lang="ts">
import MapLayout from '@/layouts/MapLayout.vue';
import ContainerModal from '@/components/modals/ContainerModal.vue';
import CharacterDisplay from '@/components/CharacterDisplay.vue';
import UniLogin from '@/components/icons/uniLogin.vue';
import { useLoginStore } from '@/stores/login';

const loginStore = useLoginStore();

</script>

<template>
    <MapLayout>
        <div class="modal-overlay--dark">
            <ContainerModal class="m--auto px--4 py--4 grid grid--gap-4 loginModal">
                <CharacterDisplay class="loginKosmo"/>
                <div class="flex flex--column">
                    <h1>Her skal du bruge din KOSMO til at forstå jorden bedre</h1>
                    <p>Kosmoerne har et citat som de går meget op i: “Klodens omgivelser studeres med observationer!” </p>
                    <button 
                        v-on:click="loginStore.login()" 
                        class="button button--rounded px--3 py--2 w--min ms--auto loginButton">
                        <UniLogin/>
                    </button>
                </div>
            </ContainerModal>
        </div>
    </MapLayout>

</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.loginModal{
    grid-template-columns: auto 45ch;
}

.loginKosmo{
    height: 100%;
    width: auto;
}

.loginButton{
    background-color: c.$dangerButton;
    height: 1.5rem;
}

</style>
