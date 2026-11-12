<script setup lang='ts'>
// Import Vue helpers: onMounted runs after render, ref makes a reactive value for the template
import { onMounted, ref } from 'vue';
// Import the Leaflet functions we need
import { map, geoJSON } from 'leaflet';
// Import our list of regions ('@' points to the src folder in a standard Vue project)
import { regions } from '@/data/regions';
// Import the GeoJSON types so TypeScript knows the shape of the data
import type { Feature, FeatureCollection } from 'geojson';
import type { Region } from '@/data/regions';
// Import Leaflet's stylesheet
import 'leaflet/dist/leaflet.css';

// Name of the country the player must find, shown in the overlay
const targetName = ref('');

// Read a text property from a feature safely (returns an empty string if it is missing)
function prop(feature: Feature, key: string): string {
    // Look up the value without assuming its type
    const value: unknown = feature.properties?.[key];

    // Only return it if it really is text
    return typeof value === 'string' ? value : '';
}

// Find the playable region a country belongs to (undefined if it is in none)
function findRegion(feature: Feature): Region | undefined {
    // Look for a region with the same continent that does not exclude this country
    return regions.find(
        (r) => r.continent === prop(feature, 'CONTINENT') && !r.exclude.includes(prop(feature, 'ADM0_A3')),
    );
}

// Run this code once the template (and the map div) exists in the page
onMounted(() => {
    // Create the map; viscosity 1 makes the locked edge firm, zoomSnap 0.25 lets the fit be tighter
    const gameMap = map('map', { maxBoundsViscosity: 1.0, zoomSnap: 0.25 });

    // The code of the country the player must find (set once the data has loaded)
    let targetCode = '';

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

            // Every country that could be the target in some region
            const candidates = data.features.filter((feature) => findRegion(feature) !== undefined);
            // Pick one of them at random
            const target = candidates[Math.floor(Math.random() * candidates.length)];

            // Stop if nothing matched (for example a typo in a continent name)
            if (!target) {return;}
            // Work out which region the picked country belongs to
            const region = findRegion(target);

            // Stop if there is no region (cannot happen, but TypeScript wants the check)
            if (!region) {return;}

            // Remember the target's code for checking answers
            targetCode = prop(target, 'ADM0_A3');
            // Show the target's name in the overlay
            targetName.value = prop(target, 'NAME');

            // Countries that are playable in this round
            const playable = data.features.filter((feature) => findRegion(feature) === region);
            // Everything else: neighbours and excluded countries
            const others = data.features.filter((feature) => findRegion(feature) !== region);

            // Draw the others first, muted and not clickable, so nothing disappears from the map
            geoJSON({ type: 'FeatureCollection', features: others }, {
                // Make these shapes ignore clicks and hovers
                interactive: false,
                // Slightly grey fill so players can tell they are not part of the quiz
                style: { color: '#555', weight: 1, fillColor: '#d8d8d8', fillOpacity: 1 },
            }).addTo(gameMap);

            // Draw the playable countries on top
            geoJSON({ type: 'FeatureCollection', features: playable }, {
                // Style applied to each playable country
                style: { color: '#555', weight: 1, fillColor: '#eee', fillOpacity: 1 },
                // Runs once per country, so we can attach behaviour to each one
                onEachFeature: (feature, layer) => {
                    // Run this when the player clicks the country
                    layer.on('click', () => {
                        // Read the clicked country's code from its data
                        const clickedCode = prop(feature, 'ADM0_A3');
                        // Read the clicked country's name from its data
                        const clickedName = prop(feature, 'NAME');

                        // Log the result for now (this is where you will set the colours later)
                        console.log(clickedName, clickedCode, clickedCode === targetCode ? 'correct' : 'wrong');
                    });
                },
            }).addTo(gameMap);

            // Fit the camera to the region's box, without animation
            gameMap.fitBounds(region.bounds, { animate: false });
            // Do not allow zooming out further than the zoom that fits the region on this screen
            gameMap.setMinZoom(gameMap.getZoom());
            // Do not allow panning outside the region's box
            gameMap.setMaxBounds(region.bounds);
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
  <!-- Wrapper pinned to the window, and the positioning parent for the overlay -->
  <div class='game'>
    <!-- Overlay telling the player which country to find -->
    <div class='prompt'>Find: {{ targetName }}</div>
    <!-- The element Leaflet draws into -->
    <div id='map' class='game-map'></div>
  </div>
</template>

<style scoped>
/* Pin the game to the visible window: no parent heights needed, and no page scroll */
.game {
  position: fixed;
  inset: 0;
}
/* The map fills the wrapper */
.game-map {
  width: 100%;
  height: 100%;
  background: #cfe8ff;
}
/* Floating label centred at the top, above the map (Leaflet's panes use z-index up to about 700) */
.prompt {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  font-size: 1.25rem;
}
</style>