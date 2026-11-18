<script setup lang="ts">
import { computed } from 'vue';
import { useXpStore } from '@/stores/xp';

const xpStore = useXpStore();

const xpProgress = computed(() => xpStore.xpInCurrentLevel() / xpStore.xpToNextLevel() * 100 + '%');

</script>

<template>
    <div class="modal flex p--3 xpBar">
        <div class="grid grid--center my--2 me--2 levelEmblem"><h2>{{ xpStore.currentLevel() }}</h2></div>
        <div class="h--100 w--100 xpProgress">
            <p class="m--0"><span>{{ xpStore.xpInCurrentLevel() }}</span> / <span>{{ xpStore.xpToNextLevel() }}</span> XP</p>
            <div class="w--100"></div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
@use '@/assets/scss/abstracts/sizes' as s;

    .xpBar {
        height: s.$topBarHeight;       // samme højde som HeaderElement, så de flugter
        grid-template-columns: auto auto;
    }
    .levelEmblem{
        aspect-ratio: 1/1;
        border: none;
        border-radius: 999px;
        height: auto;
        background-color: c.$primary;
        box-sizing: border-box;
        color: c.$white;
    }
    .xpProgress {
        --xpProgress: v-bind(xpProgress);
        div{
        height: 50%;
        border-radius: 999px;
        background: linear-gradient(to right, c.$modalStroke var(--xpProgress), c.$modalDark var(--xpProgress));
        }
    }
</style>
