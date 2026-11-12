// Import the Leaflet type for bounds so TypeScript can check our values
import type { LatLngBoundsExpression } from 'leaflet';

// Describes one playable part of the world
export interface Region {
  // Short id for use in code, menus or URLs
  id: string;
  // Name shown to the player
  label: string;
  // Camera box: [[south, west], [north, east]] in lat/lng
  bounds: LatLngBoundsExpression;
  // Value of the CONTINENT field in the GeoJSON that decides which countries belong here
  continent: string;
  // Country codes (ADM0_A3) to leave out of this region
  exclude: string[];
}

// All playable regions (the bounds are rough starting values, adjust them by eye)
export const regions: Region[] = [
    // Europe, with Russia left out because it is mostly in Asia
    { id: 'europe', label: 'Europe', bounds: [[34, -25], [72, 45]], continent: 'Europe', exclude: [] },
    // Asia
    { id: 'asia', label: 'Asia', bounds: [[-11, 26], [60, 146]], continent: 'Asia', exclude: [] },
    // Africa
    { id: 'africa', label: 'Africa', bounds: [[-35, -18], [38, 52]], continent: 'Africa', exclude: [] },
    // South America
    { id: 'south-america', label: 'South America', bounds: [[-56, -82], [13, -34]], continent: 'South America', exclude: [] },
];