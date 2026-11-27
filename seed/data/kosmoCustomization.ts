// data/kosmoCustomization.ts – katalog over alt Kosmo kan have på
// Tøj er taget fra jeres rigtige garderobe. Hår og ting er opfundet dummydata (10 stk. hver)
// Krop (ansigt og hudfarver) er IKKE med: det ligger som standard i koden
// Alle svgName-værdier er GÆT på filnavne: ret dem til jeres rigtige filer
import type { KosmoCustomization } from '../types'; // importér typen

// TØJ (svg, slottet hedder "clothing")
const clothing: KosmoCustomization[] = [
    { id: 'cust_clothing_blue_outfit', name: 'Blå outfit', category: 'clothing', svgName: 'BlueOutfit.vue', price: 100 },
    { id: 'cust_clothing_green_outfit', name: 'Grøn sweater', category: 'clothing', svgName: 'GreenOutfit.vue', price: 90 },
    { id: 'cust_clothing_yellow_outfit', name: 'Gul hoodie', category: 'clothing', svgName: 'YellowOutfit.vue' },
    { id: 'cust_clothing_pink_outfit', name: 'Lyserød kjole', category: 'clothing', svgName: 'PinkOutfit.vue', price: 110 },
    { id: 'cust_clothing_space_outfit', name: 'Rumdragt', category: 'clothing', svgName: 'SpaceOutfit.vue', price: 200 },
];

// HÅR (dummy, slottet hedder "hair")
const hair: KosmoCustomization[] = [
    { id: 'cust_hair_curls', name: 'Krøller', category: 'hair', svgName: 'hair_curls.svg', price: 80 },
    { id: 'cust_hair_ponytail', name: 'Hestehale', category: 'hair', svgName: 'hair_ponytail.svg', price: 90 },
    { id: 'cust_hair_bangs', name: 'Pandehår', category: 'hair', svgName: 'hair_bangs.svg', price: 70 },
    { id: 'cust_hair_braids', name: 'Fletninger', category: 'hair', svgName: 'hair_braids.svg', price: 110 },
    { id: 'cust_hair_mohawk', name: 'Hanekam', category: 'hair', svgName: 'hair_mohawk.svg', price: 130 },
    { id: 'cust_hair_afro', name: 'Afro', category: 'hair', svgName: 'hair_afro.svg', price: 120 },
    { id: 'cust_hair_bun', name: 'Knold', category: 'hair', svgName: 'hair_bun.svg', price: 90 },
    { id: 'cust_hair_long', name: 'Langt hår', category: 'hair', svgName: 'hair_long.svg', price: 100 },
    { id: 'cust_hair_spikes', name: 'Pigge', category: 'hair', svgName: 'hair_spikes.svg', price: 85 },
    { id: 'cust_hair_pigtails', name: 'Totter', category: 'hair', svgName: 'hair_pigtails.svg', price: 95 },
];

// TING (dummy, slottet hedder "items")
const items: KosmoCustomization[] = [
    { id: 'cust_items_sunglasses', name: 'Solbriller', category: 'items', svgName: 'items_sunglasses.svg', price: 60 },
    { id: 'cust_items_round_glasses', name: 'Runde briller', category: 'items', svgName: 'items_round_glasses.svg', price: 70 },
    { id: 'cust_items_cap', name: 'Kasket', category: 'items', svgName: 'items_cap.svg', price: 80 },
    { id: 'cust_items_headphones', name: 'Hovedtelefoner', category: 'items', svgName: 'items_headphones.svg', price: 150 },
    { id: 'cust_items_crown', name: 'Krone', category: 'items', svgName: 'items_crown.svg', price: 250 },
    { id: 'cust_items_scarf', name: 'Halstørklæde', category: 'items', svgName: 'items_scarf.svg', price: 90 },
    { id: 'cust_items_bow', name: 'Sløjfe', category: 'items', svgName: 'items_bow.svg', price: 50 },
    { id: 'cust_items_backpack', name: 'Rygsæk', category: 'items', svgName: 'items_backpack.svg', price: 120 },
    { id: 'cust_items_umbrella', name: 'Paraply', category: 'items', svgName: 'items_umbrella.svg', price: 100 },
    { id: 'cust_items_teddy', name: 'Bamse', category: 'items', svgName: 'items_teddy.svg', price: 180 },
];

export const kosmoCustomization: KosmoCustomization[] = [...clothing, ...hair, ...items]; // alt samlet
