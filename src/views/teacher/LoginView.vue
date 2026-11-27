<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { LoginModal } from '@/components';
import ContainerModal from '@/components/modals/ContainerModal.vue';
import CharacterDisplay from '@/components/CharacterDisplay.vue';

const loginModal = useTemplateRef<InstanceType<typeof LoginModal>>('loginModal');
</script>

<template>
    <div class="w-vw--100 h-vh--100 background">
        <div class="modal-overlay--dark">
            <ContainerModal class="m--auto px--4 py--4 grid grid--gap-4 loginModal">
                <CharacterDisplay :clothes="['TeacherHair', 'TeacherOutfit', 'Glasses', 'Bow']" :face="['cheeks', 'eyelashes']" class="loginKosmo"/>
                <div class="flex flex--column">
                    <h1 class="modal__title">KOSMOs Lærerpanel</h1>
                    <p class="modal__text">Til jer undervisere.</p>
                    <button
                        v-on:click="loginModal?.open({ name: 'teacher-menu' })"
                        class="button button--danger button--rounded button--drop-shadow px--3 py--2 w--min ms--auto loginButton">
                        Log ind
                    </button>
                </div>
            </ContainerModal>
        </div>

        <LoginModal ref="loginModal" />
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.background{
    position: absolute;
    background-color: c.$background;
}

.loginModal{
    grid-template-columns: auto 45ch;
    align-items: center;
}

.loginKosmo{
    height: 30vh;
    width: auto;
}

.loginButton{
    white-space: nowrap;
}
</style>
