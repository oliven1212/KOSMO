<script setup lang="ts">

</script>

<template>
    <div class="modal">
        <slot/>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    div{
        width: fit-content;
        height: fit-content;
    }
</style>
