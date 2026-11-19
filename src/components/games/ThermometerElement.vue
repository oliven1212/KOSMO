<script setup lang="ts">
import { Fire, Snowflake, Sun, Thermometer } from '@/components/icons/games';

defineProps<{
    temperature: number; // Temperature in degrees (-30 to 150)
}>();
</script>

<template>
    <div class="thermometerElement">
        <Thermometer :temperature="temperature" />
        <!-- Weather icon in the top corner: snowflake at 0 and below, sun below 100, fire from 100 and up -->
        <div class="weatherIcon">
            <Snowflake v-if="temperature <= 0" />
            <Sun v-else-if="temperature < 100" />
            <Fire v-else />
            <p class="m--0" :class="{ fireText: temperature >= 100 }">{{ temperature }} °C</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;
    // 1cqw = 2.62 SVG units, so everything scales with the thermometer
    .thermometerElement{
        position: relative;
        width: 262px; // Change this to resize the whole thermometer
        container-type: inline-size;

        > svg{
            display: block;
            width: 100%;
            height: auto;
        }
    }

    .weatherIcon{
        position: absolute;
        top: 5.3cqw; // About 60% of the icon overlaps the thermometer
        left: 5.3cqw;
        width: 34.4cqw; // 90 SVG units
        display: grid;
        place-items: center;

        > *{
            grid-area: 1 / 1; // Stack the text on top of the icon
        }

        svg{
            width: 100%;
            height: auto;
        }

        p{
            position: relative;
            color: c.$white;
            font-size: 9cqw; // Same height as the numbers on the scale
            font-weight: bold;
            -webkit-text-stroke: 2px c.$secondary;
            paint-order: stroke fill; // Draw the fill over the stroke, hiding overlapping glyph contours
        }

        .fireText{
            top: 10%; // The fire's center of mass is lower, so push the text down
        }
    }
</style>
