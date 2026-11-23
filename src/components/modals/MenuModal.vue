<script lang="ts" setup>
import HeaderElement from '@/components/HeaderElement.vue';
import CloseButton from '@/components/buttons/CloseButton.vue';

defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="p--2 flex flex--column flex--gap-2 menuModal">
        <HeaderElement>{{ title }}</HeaderElement>

        <div class="p--3 modal menuModal__content">
            <!-- Toprække: faner i midten, luk-knap til højre. Ligger over indholdet, ikke ovenpå det -->
            <div class="menuModal__top">
                <div class="menuModal__tabs">
                    <slot name="tabs" /> <!-- fx <template #tabs><TabBar ... /></template> -->
                </div>
                <CloseButton class="menuModal__close" />
            </div>

            <slot /> <!-- ListContainer osv. -->

            <!-- Knapper nederst, fx Fortryd og Gem -->
            <div v-if="$slots.actions" class="menuModal__actions">
                <slot name="actions" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/sizes' as s;

.menuModal {
    box-sizing: border-box;
    height: 100%; // samme højde som ProfileInfo
    contain: size;   // indholdet må ikke gøre modalen højere, ellers skifter Garderobe og Præstationer størrelse. Den scroller indeni
    margin-right: 12vw;

    @media (max-width: s.$breakpointCompact) {
        margin-right: 16px;   // på tablet er der ikke plads at spilde
        min-height: 70vh;     // på tablet er ProfileInfo lav, så modalen får selv mere plads
    }

    &__content {
        flex: 1;
        overflow: auto; // scroller, hvis der er mange stykker tøj
        display: flex;
        flex-direction: column;
        gap: 24px; // luft mellem toprækken og listen
    }

    &__top {
        display: grid;
        grid-template-columns: 44px 1fr 44px; // tom kolonne til venstre, så fanerne står i midten
        align-items: center;
        gap: 16px;
    }

    &__tabs {
        grid-column: 2;
        display: flex;
        justify-content: center;
    }

    &__close {
        grid-column: 3;
        width: 44px;
        height: 44px;
    }

    &__actions {
        margin-top: auto; // skubber knapperne helt ned
        position: relative; // så indhold kan placeres i forhold til rækken, fx køb-boksen i midten
        display: flex;
        flex-wrap: wrap;   // så køb-boksen kan få sin egen række på små skærme
        justify-content: flex-end;
        align-items: center;
        gap: 16px;

        // :slotted, fordi knapperne kommer udefra (fra viewet) gennem slottet
        :slotted(.button--round) {
            width: 56px;
            height: 56px;
            padding: 10px;  // mindre end standard 16px, så ikonet bliver større
        }
    }
}
</style>
