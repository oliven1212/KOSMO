<script setup lang="ts">
import { ref } from 'vue';
import { useTeacherAuthStore } from '@/stores/teacherAuth';

const teacherAuthStore = useTeacherAuthStore();

const dialogRef = ref<HTMLDialogElement | null>(null);
const email = ref<string>('');
const password = ref<string>('');

// Opens the modal with a dark backdrop
function open(): void {
    dialogRef.value?.showModal();
}

// Closes the modal
function close(): void {
    dialogRef.value?.close();
}

// Sends the typed email and password to the store to log in
async function onSubmit(): Promise<void> {
    await teacherAuthStore.login(email.value, password.value);
}

// open is the only thing the parent can use, closing is handled in here
defineExpose({ open });
</script>

<template>
    <!-- The Esc key closes the dialog natively, so no extra handling is needed -->
    <dialog ref="dialogRef" class="modal px--4 py--4 teacherLoginModal">
        <h2 class="modal__title">Log ind som underviser</h2>

        <!-- A real form, so the Enter key submits and the browser checks the required fields -->
        <form class="flex flex--column flex--gap-3" @submit.prevent="onSubmit">
            <label class="flex flex--column flex--gap-1">
                Email
                <input
                    v-model="email"
                    type="email"
                    autocomplete="username"
                    required
                    class="teacherLoginModal__input" />
            </label>

            <label class="flex flex--column flex--gap-1">
                Adgangskode
                <input
                    v-model="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="teacherLoginModal__input" />
            </label>

            <p v-if="teacherAuthStore.loginError" class="m--0 teacherLoginModal__error">
                {{ teacherAuthStore.loginError }}
            </p>

            <div class="flex flex--just-end flex--gap-3">
                <button
                    type="button"
                    class="button button--rounded button--drop-shadow px--3 py--1 teacherLoginModal__cancel"
                    @click="close">
                    Annuller
                </button>
                <button
                    type="submit"
                    class="button button--danger button--rounded button--drop-shadow px--3 py--1">
                    Log ind
                </button>
            </div>
        </form>
    </dialog>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstracts/colors' as c;

.teacherLoginModal {
    width: min(420px, 90vw);
    &__input {
        font: inherit;
        padding: 8px 12px;
        border: 3px solid c.$modalStroke;
        border-radius: 12px;

    }

    &__cancel {
        background-color: c.$modalDark;
    }

    &__error {
        color: c.$dangerButton;
    }
}
</style>
