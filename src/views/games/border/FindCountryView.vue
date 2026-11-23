<script setup lang="ts">
// Import the Vue helpers we use
import { computed, onMounted, ref, watch } from 'vue';
// Import the Leaflet functions and the Path class (every country shape is a Path)
import { control, map, geoJSON, Path } from 'leaflet';
// Import the Leaflet map type under another name, because Map would clash with JavaScript's own Map
import type { Map as LeafletMap } from 'leaflet';
// Import the GeoJSON type for the loaded file
import type { Feature, FeatureCollection } from 'geojson';
// Import Leaflet's stylesheet
import 'leaflet/dist/leaflet.css';
// Import the game rules and the highlight type
import { useCountryGame, type Highlight } from '@/composables/useCountryGame';
// Import the data helpers, the regions and the facts
import { countryCode, countryName, findRegion } from '@/utils/countryData';
import { regions } from '@/data/regions';
import { getCountryFact } from '@/data/countryFacts';
import { countryGameDescription } from '@/data/tasksTexts';
// Import the header and the four modals
import HeaderElement from '@/components/HeaderElement.vue';
import { ExitButton } from '@/components/buttons';
// Import the loading screen, which covers the game while the map data loads
import LoadingLayout from '@/layouts/LoadingLayout.vue';
import TaskDescriptionModal from '@/components/modals/TaskDescriptionModal.vue';
import TaskConfirmationModal from '@/components/modals/TaskConfirmationModal.vue';
import TaskResultModal from '@/components/modals/TaskResultModal.vue';
import QuizResultModal from '@/components/modals/QuizResultModal.vue';

// Take the state apart at the top level so the template can use it without .value
const {
    phase, target, turnNumber, totalTurns, correctCount, lastAnswerCorrect,
    highlights, coins, xp, startGame, selectCountry, cancelSelection, confirmSelection, nextTurn,
} = useCountryGame();

// Whether the task description modal is open (it opens when the loading screen is done)
const showDescription = ref(false);
// Whether the final summary modal is open
const showQuizResult = ref(false);
// The Leaflet map, created in onMounted (null until then)
let gameMap: LeafletMap | null = null;
// One Leaflet layer per playable country, so we can recolour a country by its code
const layers = new Map<string, Path>();
// The region id of each playable country, so we can mute the ones outside the current region
const layerRegions = new Map<string, string>();
// Every highlight class a country can carry, so they can all be removed before a new one is added
const highlightClasses: string[] = ['country--selected', 'country--correct', 'country--wrong'];

// The text shown in the header
const headerText = computed((): string => {
    // Read the country of this turn
    const goal = target.value;

    // Show a placeholder until the data has loaded
    if (!goal) {
        return 'Henter kortet...';
    }
    // The country to find and the turn counter
    return `Find: ${goal.name} (${turnNumber.value}/${totalTurns.value})`;
});

// The text for the result modal: always about the CORRECT country, whatever the player clicked
const resultFact = computed((): string => {
    // Read the country of this turn
    const goal = target.value;

    // Nothing to say if there is no target
    if (!goal) {
        return '';
    }
    // After a wrong answer, start with the name of the right country
    const intro = lastAnswerCorrect.value ? '' : `Det rigtige svar var ${goal.name}. `;

    // Then the fact about the correct country (the fallback is handled by getCountryFact)
    return intro + getCountryFact(goal.code);
});

// Wrap a list of features in a FeatureCollection, so Leaflet's types accept it
function toCollection(features: Feature[]): FeatureCollection {
    // A FeatureCollection is just a type tag plus the list of features
    return { type: 'FeatureCollection', features };
}

// Recolour every country by switching CSS classes (the colours themselves live in the SCSS below)
function applyHighlights(current: Record<string, Highlight>): void {
    // Go through every drawn country
    layers.forEach((layer, code) => {
        // Get the SVG element Leaflet drew for this country
        const element = layer.getElement();

        // Skip it if it has not been drawn
        if (!element) {
            return;
        }
        // Remove any highlight from the previous state
        element.classList.remove(...highlightClasses);
        // Look up the highlight this country should have now
        const highlight = current[code];

        // Nothing more to do for countries without a highlight
        if (highlight === undefined) {
            return;
        }
        // Add the class that matches the highlight (selected, correct or wrong)
        element.classList.add(`country--${highlight}`);
        // Draw highlighted borders on top of their neighbours
        layer.bringToFront();
    });
}

// Show one region: point the camera at it and mute the countries outside it
function showRegion(regionId: string): void {
    // Find the region's settings (its camera box)
    const region = regions.find((r) => r.id === regionId);

    // Stop if the map or the region does not exist
    if (!gameMap || !region) {
        return;
    }
    // Unlock the camera first, so the old region's limits do not squeeze the new one
    gameMap.setMinZoom(0);
    gameMap.setMaxBounds([[-90, -180], [90, 180]]);
    // Fit the camera to the new region's box, without animation
    gameMap.fitBounds(region.bounds, { animate: false });
    // Do not allow zooming out further than the zoom that fits the region on this screen
    gameMap.setMinZoom(gameMap.getZoom());
    // Do not allow panning outside the region's box
    gameMap.setMaxBounds(region.bounds);
    // Go through every playable country
    layers.forEach((layer, code) => {
        // Get the SVG element Leaflet drew for this country
        const element = layer.getElement();

        // Skip it if it has not been drawn
        if (!element) {
            return;
        }
        // Mute the country if it is outside this region (muted countries are drawn but cannot be clicked)
        element.classList.toggle('country--muted', layerRegions.get(code) !== regionId);
    });
}

// Recolour the map whenever the game changes the highlights
watch(highlights, (current) => {
    // Update all country colours
    applyHighlights(current);
});

// Show the right region whenever a new country is up (this also resets the zoom every round)
watch(target, (current) => {
    // Nothing to show before the game has started
    if (current) {
        // Switch the map to this country's region
        showRegion(current.regionId);
    }
});

// Open the summary when the last turn is done (the rewards were already paid out by the game)
watch(phase, (current) => {
    // Only react to the end of the game
    if (current === 'finished') {
        // Show the summary
        showQuizResult.value = true;
    }
});

// Run this code once the template (and the map div) exists in the page
onMounted(() => {
    // Create the map without the default zoom buttons, because they would sit under the floating header
    const mapInstance = map('map', { maxBoundsViscosity: 1.0, zoomSnap: 0.25, zoomControl: false });

    // Add the zoom buttons in the bottom left corner instead, as in the design (styled in the SCSS below)
    control.zoom({ position: 'bottomleft', zoomInTitle: 'Zoom ind', zoomOutTitle: 'Zoom ud' }).addTo(mapInstance);
    // Remember the map so showRegion can use it
    gameMap = mapInstance;

    // Async function that loads the country data and draws it on the map
    async function loadCountries(): Promise<void> {
        // Try the loading code, so any failure is caught below
        try {
            // Fetch the GeoJSON file from the public folder and wait for the response
            const response = await fetch('/data/maps/countries.geojson');

            // Treat HTTP errors like a 404 (wrong path) as failures too
            if (!response.ok) {
                // Throw an error with a helpful message, which jumps to the catch block
                throw new Error(`Failed to load countries: ${response.status}`);
            }
            // Convert the response body into a typed GeoJSON object
            const data = (await response.json()) as FeatureCollection;

            // Countries that belong to a playable region
            const inRegions = data.features.filter((feature) => findRegion(feature) !== undefined);
            // Everything else: always muted
            const others = data.features.filter((feature) => findRegion(feature) === undefined);

            // Draw the others first, muted and not clickable, so nothing disappears from the map
            geoJSON(toCollection(others), {
                // Make these shapes ignore clicks
                interactive: false,
                // The CSS classes go in the style option, because className belongs to the shapes, not to the layer
                style: { className: 'country country--muted' },
            }).addTo(mapInstance);

            // Draw all playable countries once; every round mutes the ones outside its region
            geoJSON(toCollection(inRegions), {
                // The CSS class that the SCSS styles
                style: { className: 'country' },
                // Runs once per country, so we can attach behaviour to each one
                onEachFeature: (feature, layer) => {
                    // Only country shapes can be recoloured
                    if (layer instanceof Path) {
                        // Remember the layer and its region so the rounds can find them by code
                        layers.set(countryCode(feature), layer);
                        layerRegions.set(countryCode(feature), findRegion(feature)?.id ?? '');
                    }
                    // Run this when the player clicks the country
                    layer.on('click', () => {
                        // Let the game decide what a click means
                        selectCountry(countryCode(feature));
                    });
                },
            }).addTo(mapInstance);

            // Hand every playable country to the game, which picks a region and a country for each turn
            startGame(inRegions.flatMap((feature) => {
                // Look up the country's region
                const region = findRegion(feature);

                // Skip countries without a region (cannot happen here, but TypeScript wants the check)
                if (!region) {
                    return [];
                }
                // The country as the game sees it
                return [{ code: countryCode(feature), name: countryName(feature), regionId: region.id }];
            }));
        } catch (error) {
            // Log the problem to the browser console so you can see what went wrong
            console.error('Could not load the map data:', error);
        }
    }

    // Start loading; void tells the linter we are intentionally not awaiting here
    void loadCountries();
});
</script>

<template>
    <!-- Loading screen with fun facts on top; the map is built and loads its countries underneath -->
    <LoadingLayout @done="showDescription = true">
        <!-- Wrapper pinned to the window: the map fills it and the header floats on top -->
        <div class="game">
            <!-- The element Leaflet draws into, filling the whole screen -->
            <div id="map" class="game__map"></div>

            <!-- Floating bar on top of the map with the exit button, the header and the instructions button -->
            <div class="game__top">
                <!-- Asks "are you sure?" before going back to the map -->
                <ExitButton class="game__exit" />
                <!-- The premade header; the text goes in its slot -->
                <HeaderElement class="game__header">{{ headerText }}</HeaderElement>
                <!-- Small button that reopens the instructions -->
                <button type="button" class="game__help" aria-label="Vis opgaven" @click="showDescription = true">
                    ?
                </button>
            </div>

        <!-- Instructions: open at the start, and again from the button above -->
        <TaskDescriptionModal
          v-if="showDescription"
          :content="countryGameDescription"
          @close="showDescription = false"
        />

        <!-- Confirmation: says nothing about the country, the neutral highlight on the map is the only hint -->
        <TaskConfirmationModal
          v-if="phase === 'confirming'"
          text="Er du sikker på dit valg?"
          @confirm="confirmSelection"
          @close="cancelSelection"
        />

        <!-- Result of one turn; the answer and the fact are set before it appears -->
        <TaskResultModal
          v-if="phase === 'result'"
          :is-correct="lastAnswerCorrect"
          :fact="resultFact"
          @close="nextTurn"
        />

        <!-- Summary after the last turn -->
        <QuizResultModal
          v-if="showQuizResult"
          :max-tasks="totalTurns"
          :correct-tasks="correctCount"
          :coins-gotten="coins"
          :xp-gotten="xp"
        />
      </div>
    </LoadingLayout>
</template>

<style scoped lang="scss">
// Bring in the project's colour, size and z-index variables
@use 'sass:color';
@use '@/assets/scss/abstracts/colors' as *;
@use '@/assets/scss/abstracts/sizes' as *;
@use '@/assets/scss/abstracts/z-index' as *;

// Pin the game to the visible window so the page never scrolls
.game {
    position: fixed;
    inset: 0;
}

// The map fills the whole screen; the z-index creates a stacking context, which keeps
// Leaflet's own layers (up to about 700) from climbing above the header
.game__map {
    position: absolute;
    inset: 0;
    z-index: $z-map;
    background: $background;
}

// The floating bar, centred at the top and above the map
.game__top {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: $z-header;
    display: flex;
    align-items: center;
    gap: 12px;
    width: calc(100% - 24px);
    max-width: 1275px;
    // Clicks and drags in the empty space pass through to the map
    pointer-events: none;
}

// The header takes all the width the button leaves free, and still catches its own clicks
.game__header {
    flex: 1;
    pointer-events: auto;
}

// The exit button: round and as tall as the header (ExitButton makes itself clickable)
.game__exit {
    flex: none;
    width: $topBarHeight;
    height: $topBarHeight;
}

// The instructions button: as tall as the header, square, with the same frame style
.game__help {
    flex: none;
    width: $topBarHeight;
    height: $topBarHeight;
    box-sizing: border-box;
    background: $modalBackground;
    border: 3px solid $modalStroke;
    border-radius: 24px;
    color: $secondary;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;
    pointer-events: auto;

    // Tablets have no hover, so give a press effect instead
    &:active {
        background: $modalDark;
    }
}

// Leaflet adds these classes to the SVG shapes, which are created outside Vue, so :deep is needed
// A normal playable country
.game :deep(.country) {
    fill: $white;
    fill-opacity: 1;
    stroke: $secondary;
    stroke-width: 1;
    stroke-dasharray: none;
    transition: fill 0.2s;
}
// Neighbours that are not part of the quiz
.game :deep(.country--muted) {
    fill: $modalStroke;
    // Makes the shape ignore clicks and hovers; !important so Leaflet's own click rule cannot override it
    pointer-events: none !important;
}
// The country the player just clicked, neutral so it gives nothing away
.game :deep(.country--selected) {
    fill: $kosmoLemon;
    stroke-width: 3;
}
// The correct country
.game :deep(.country--correct) {
    fill: $primary;
    stroke-width: 3;
}
// A wrong answer: a dashed border as well as the colour, so colour-blind players can tell it from green
.game :deep(.country--wrong) {
    fill: $dangerButton;
    stroke-width: 3;
    stroke-dasharray: 6 4;
}

// Leaflet's zoom buttons, restyled like the game's other buttons: big, green and with a pressed effect
.game :deep(.leaflet-control-zoom) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 0 24px 24px;
    border: none;
    box-shadow: none;
}

.game :deep(.leaflet-control-zoom a) {
    width: 56px;
    height: 56px;
    line-height: 56px;
    border: none;
    border-radius: 16px;
    background: $mapButton;
    color: $secondary;
    font-size: 32px;
    box-shadow: 0 4px 0 color.scale($mapButton, $lightness: -25%);

    // Tablets have no hover, so give a press effect instead
    &:active {
        transform: translateY(4px);
        box-shadow: none;
    }
}

// Leaflet greys out a button when you cannot zoom further
.game :deep(.leaflet-control-zoom a.leaflet-disabled) {
    opacity: 0.5;
}
</style>