<script setup lang="ts">

</script>

<template>
    <div class="xpBar">

    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
@use '@/assets/scss/abstracts/sizes' as *;

.xpBar {
    width: 100%;
    height: $topBarHeight;       // samme højde som HeaderElement, så de flugter
    box-sizing: border-box;
    background-color: orange;    // midlertidig, indtil XP-baren bliver bygget
}
</style>
