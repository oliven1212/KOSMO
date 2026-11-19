<script lang="ts" setup>
import { CharacterDisplay, MoneyDisplay } from '@/components';

defineProps<{
    name: string;
    price: number;
    clothing: string;
    selected?: boolean;
    owned?: boolean;   // ejer man det, vises prisen ikke
}>();

defineEmits<{ select: [] }>();

</script>

<template>
    <button class="clothingCard p--2 flex flex--column flex--gap-2" :class="{ 'clothingCard--selected' : selected }"
    @click="$emit('select')">
        <CharacterDisplay :clothes="[clothing]" class="clothingCard__image" />
        <div class="flex flex--just-between clothingCard__footer">
            <span class="clothingCard__name">{{ name }}</span>
            <MoneyDisplay v-if="!owned" :amount="price" />
        </div>
    </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.clothingCard {
    width: 100%;
    box-sizing: border-box;
    background-color: c.$modalDark;
    border: 3px solid transparent;
    border-radius: 16px;
    filter: drop-shadow(0px 4px 0px c.$modalStroke);
    cursor: pointer;

    &--selected {
        border-color: c.$modalSelected;
        filter: none;   // valgt kort er "trykket ned", derfor ingen skygge
    }

    &__image {
        width: 45%;
        height: auto;
        align-self: center;
        }
    &__footer { align-items: center; }
    &__name {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: c.$secondary;
    }

}

</style>
