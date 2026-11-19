<script setup lang="ts">
import { AchievementButton, WardrobeButton } from '@/components/buttons';
import { CharacterDisplay, MoneyDisplay, XPBar } from '@/components';
import { storeToRefs } from 'pinia';

import { useWalletStore } from '@/stores/wallet';
import { useWardrobeStore } from '@/stores/wardrobe';

const { tryingOnList } = storeToRefs(useWardrobeStore());
const walletStore = useWalletStore();

</script>

<template>
    <div class="w--fit h--fit min-h--50 p--2 m--auto ms--3 flex flex--column flex--gap-2 profileContainer">
        <XPBar/>
        <div class="flex flex--column flex--gap-3 modal character">
            <div class="flex flex--just-between">
                <div></div>
                <div class="px--2 py--1 moneyBackground">
                    <MoneyDisplay :amount="walletStore.wallet"/>
                </div>
            </div>
            <div class="flex flex--column w--100">
                <h1 class="w--100 m--0">Kosmo</h1>
                <CharacterDisplay :clothes="tryingOnList" class="kosmoContainer px--2 py--3 w--100"/>
            </div>
            <div class="w--100 grid grid--cols-2 grid--gap-3 px--3 profileButtons">
                <WardrobeButton/>
                <AchievementButton class="button button--round p--1 achivementButton" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
@use '@/assets/scss/abstracts/sizes' as s;

    .profileButtons{
        // Mindre luft på små skærme, så knapperne ikke bliver klemt
        @media (max-width: s.$breakpointCompact) {
            padding-inline: 4px;
            column-gap: 12px;
        }

        > * {
            width: 100%;
            height: auto;
            padding: 18%;   // i procent, så ikonet vokser og skrumper med knappen
        }
    }

    .profileContainer{
        box-sizing: border-box;
        overflow: hidden;
    }

    .character{
        padding: 0.75rem;
        h1{
            text-align: center;
            line-height: 100%;
            color: c.$secondary;
        }
    }

    .kosmoContainer{
        background-color: c.$kosmoBackground;
        box-sizing: border-box;
        border: none;
        border-radius: 24px;
    }
    .achivementButton{
        background-color: c.$achievementButton;
    }
    .moneyBackground{
        background-color: c.$kosmoBackground;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        color: c.$secondary;
    }
</style>
