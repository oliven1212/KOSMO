<script setup lang="ts">
import XPBar from '@/components/XPBar.vue';
import MoneyDisplay from '@/components/MoneyDisplay.vue';
import CharacterDisplay from '@/components/CharacterDisplay.vue';
import WardrobeButton from '@/components/WardrobeButton.vue';

</script>

<template>
    <div class="profileContainer">
        <XPBar/>
        <div class="character">
            <div class="flex flex--just-between">
                <div></div>
                <MoneyDisplay/>
            </div>
            <CharacterDisplay/>
            <div class="flex">
                <WardrobeButton/>
                <button></button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    .profileContainer{
        width: fit-content;
        min-width: 100px;
        height: fit-content;
        min-height: 50%;
        box-sizing: content-box;
        padding: 0.5rem;
        margin: auto;
        margin-left: 1rem;

        background-color: rgba(255, 255, 0, 0.123);
    }

    .character{
        display: flex;
        flex-direction: column;
    }
</style>
