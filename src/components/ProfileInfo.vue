<script setup lang="ts">
import XPBar from '@/components/XPBar.vue';
import MoneyDisplay from '@/components/MoneyDisplay.vue';
import CharacterDisplay from '@/components/CharacterDisplay.vue';
import WardrobeButton from '@/components/buttons/WardrobeButton.vue';
import AchievementButton from '@/components/buttons/AchievementButton.vue';

</script>

<template>
    <div class="w--fit h--fit min-h--50 p--2 m--auto ms--3 flex flex--column flex--gap-2 profileContainer">
        <XPBar/>
        <div class="flex flex--column flex--gap-3 p--3 modal character">
            <div class="flex flex--just-between">
                <div></div>
                <MoneyDisplay/>
            </div>
            <div class="flex flex--column w--100">
                <h1 class="w--100 m--0">Kosmo</h1>
                <CharacterDisplay class="kosmoContainer px--2 py--3 w--100"/>
            </div>
            <div class="w--100 grid grid--cols-2 grid--gap-3 px--3">
                <WardrobeButton/>
                <AchievementButton class="button button--round p--1 achivementButton" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    .profileContainer{
        box-sizing: border-box;
        overflow: hidden;
    }

    .character{
        h1{
            text-align: center;
        }
    }

    .kosmoContainer{
        background-color: c.$kosmoBackground;
        box-sizing: border-box;
        border: none;
        border-radius: 24px;
    }
    .achivementButton{
        width: 100%;    // fylder sin kolonne, ligesom garderobe-knappen
        height: auto;   // overskriver height: 100% fra .button--round, så højden følger bredden (aspect-ratio 1/1)
        background-color: c.$achievementButton;
        border-style: solid;
        border-width: 3px;
        border-color: c.$white;
        filter: drop-shadow(0px 4px 0px color-mix(in oklab, c.$achievementButton, black 15%));
    }
</style>
