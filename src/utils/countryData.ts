// Import the GeoJSON type for a single country
import type { Feature } from 'geojson';
// Import our regions and the Region type
import { regions, type Region } from '@/data/regions';

// Translator from region codes to Danish names, created once and reused for every country
const danishNames = new Intl.DisplayNames(['da'], { type: 'region' });

// Read a text property from a feature safely (returns an empty string if it is missing)
export function prop(feature: Feature, key: string): string {
    // Look up the value without assuming its type
    const value: unknown = feature.properties?.[key];

    // Only return it if it really is text
    return typeof value === 'string' ? value : '';
}

// The unique code used to compare answers
export function countryCode(feature: Feature): string {
    // ADM0_A3 does not have the -99 placeholders that some ISO fields have
    return prop(feature, 'ADM0_A3');
}

// The name shown to the player, in Danish
export function countryName(feature: Feature): string {
    // Try the fixed code field first; the plain ISO_A2 is -99 for France and Norway
    for (const key of ['ISO_A2_EH', 'ISO_A2']) {
        // Read the two-letter code from the country's data
        const code = prop(feature, key);

        // Try to translate it
        try {
            // Ask the browser for the Danish name of this code
            const danish = danishNames.of(code);
            
            // Use it if the browser really translated it (it hands the code back when it does not know it)
            if (danish && danish !== code) {
                return danish;
            }
        } catch {
            // An invalid code like -99 makes of() throw, so try the next field
        }
    }
    // No usable code: fall back to the English name from the file
    return prop(feature, 'NAME');
}

// Find the playable region a country belongs to (undefined if it is in none)
export function findRegion(feature: Feature): Region | undefined {
    // Look for a region with the same continent that does not exclude this country
    return regions.find(
        (r) => r.continent === prop(feature, 'CONTINENT') && !r.exclude.includes(countryCode(feature)),
    );
}