<script setup lang="ts">
import XPBar from '@/components/XPBar.vue';
import MoneyDisplay from '@/components/MoneyDisplay.vue';
import CharacterDisplay from '@/components/CharacterDisplay.vue';
import WardrobeButton from '@/components/WardrobeButton.vue';
import AchievementButton from '@/components/AchievementButton.vue';

</script>

<template>
    <div class="w--fit h--fit min-h--50 p--2 m--auto ms--3 flex flex--column flex--gap-2 profileContainer">
        <XPBar/>
        <div class="flex flex--column flex--gap-3 p--3 modal character">
            <div class="flex flex--just-between">
                <div></div>
                <MoneyDisplay :amount="100"/>
            </div>
            <div class="flex flex--column w--100">
                <h1 class="w--100 m--0">Kosmo</h1>
                <CharacterDisplay class="kosmoContainer px--2 py--3 w--100"/>
            </div>
            <div class="w--100 grid grid--cols-2 grid--gap-3 px--2">
                <WardrobeButton />
                <AchievementButton />
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
</style>
