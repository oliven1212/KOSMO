<!--
    ExitButton

    Rød knap med dør-ikonet, som lader spilleren forlade et spil.
    Den spørger selv "Er du sikker?" og går først tilbage til kortet, når man bekræfter.

    Brug i et spil (forælderen bestemmer kun størrelsen):
        <ExitButton class="game__exit" />
-->

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Back from '@/components/icons/Back.vue';
import TaskConfirmationModal from '@/components/modals/TaskConfirmationModal.vue';

const router = useRouter();

// Om "Er du sikker?"-pop-uppen er åben
const showConfirm = ref<boolean>(false);

// Tilbage til kortet. Spillets svar bliver ikke gemt
async function leaveGame(): Promise<void> {
    await router.push({ name: 'homepage' });
}
</script>

<template>
    <!-- Én yderste div, så forælderens class og stil lander her -->
    <div class="exitButton">
        <!-- En <button> og ikke et link, fordi den først skal spørge, før den skifter side -->
        <button
            type="button"
            aria-label="Forlad spillet"
            class="
            button
            button--round
            button--danger
            button--drop-shadow
            exitButton__button"
            @click="showConfirm = true">
            <Back />
        </button>

        <TaskConfirmationModal
            v-if="showConfirm"
            text="Er du sikker på, at du vil forlade spillet? Dine svar bliver ikke gemt."
            @confirm="leaveGame"
            @close="showConfirm = false"
        />
    </div>
</template>

<style lang="scss" scoped>
.exitButton {
    // Altid klikbar, også når den ligger i en bar med pointer-events: none (fx landespillets topbar).
    // Pop-uppen ligger inde i den her div, så den arver det og kan også klikkes
    pointer-events: auto;

    &__button {
        width: 100%;
        height: 100%;
        padding: 22%;   // i procent, så ikonet passer, uanset hvor stor forælderen gør knappen
    }
}
</style>
