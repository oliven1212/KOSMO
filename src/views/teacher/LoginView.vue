<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { TeacherLoginModal } from '@/components';
import ContainerModal from '@/components/modals/ContainerModal.vue';
import CharacterDisplay from '@/components/CharacterDisplay.vue';

const loginModal = useTemplateRef<InstanceType<typeof TeacherLoginModal>>('loginModal');
</script>

<template>
    <div class="w-vw--100 h-vh--100 background">
        <div class="modal-overlay--dark">
            <ContainerModal class="m--auto px--4 py--4 grid grid--gap-4 loginModal">
                <!-- No clothes yet, the teacher outfit has not been made -->
                <CharacterDisplay :clothes="[]" :face="['cheeks', 'eyelashes']" class="loginKosmo"/>
                <div class="flex flex--column">
                    <h1 class="modal__title">KOSMOs Lærerpanel</h1>
                    <p class="modal__text">Til jer undervisere.</p>
                    <button
                        v-on:click="loginModal?.open()"
                        class="button button--danger button--rounded button--drop-shadow px--3 py--1 w--min ms--auto loginButton">
                        Log ind
                    </button>
                </div>
            </ContainerModal>
        </div>

        <TeacherLoginModal ref="loginModal" />
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
    font-weight: 700;
    white-space: nowrap;
}
</style>
