<script setup lang="ts">
defineProps<{
    disabled?: boolean;   // fx når man ikke har penge nok
}>();

defineEmits<{ buy: [] }>();
</script>

<template>
    <!-- Vises når man prøver tøj, man ikke ejer endnu -->
    <div class="buyBox">
        <p class="buyBox__text">Du prøver noget, du ikke ejer endnu.</p>
        <button
            type="button"
            class="buyBox__button"
            :disabled="disabled"
            @click="$emit('buy')">
            Køb
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/assets/scss/abstracts/colors' as c;

.buyBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 8px 8px 8px 16px;
    border-radius: 16px;
    background-color: c.$modalNotice;

    &__text {
        margin: 0;
        color: c.$secondary;
    }

    &__button {
        padding: 6px 24px;
        border: none;
        border-radius: 999px;
        background-color: c.$primary;
        color: c.$white;
        font: inherit;
        font-weight: bold;
        cursor: pointer;
        filter: drop-shadow(0px 4px 0px color.scale(c.$primary, $lightness: -30%));

        &:active {
            transform: translateY(4px);
            filter: none;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }
    }
}
</style>
