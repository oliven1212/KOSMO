<script setup lang='ts'>
// Import the Vue lifecycle hook that runs after the component is on the page
import { onMounted } from 'vue';
// Import the functions we need from Leaflet 1.x
import { map, geoJSON } from 'leaflet';
// Import Leaflet's stylesheet
import 'leaflet/dist/leaflet.css';

// Run this code once the template (and the map div) exists in the page
onMounted(() => {
    // Create the map in the element with id 'map'
    const gameMap = map('map');

    // Set the starting view right away: [[south, west], [north, east]] in lat/lng
    gameMap.fitBounds([[34, -25], [72, 45]]);

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
            // Convert the response body into a JavaScript object and wait for it
            const data = await response.json();

            // Build a layer from the data with a simple default style and add it to the map
            geoJSON(data, {
                // Style applied to each country shape
                style: { color: '#555', weight: 1, fillColor: '#eee', fillOpacity: 1 },
            }).addTo(gameMap);
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
  <!-- The element Leaflet draws into; it needs an explicit width and height -->
  <div id='map' style='width: 100%; height: 100vh; background: #cfe8ff;'></div>
</template>