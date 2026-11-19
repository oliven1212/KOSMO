import type { Category } from '@/stores/wardrobe';

// Alt det brugeren ser som tekst i garderoben.
// Når der kommer flere sprog, er det denne fil der skiftes ud (fx med vue-i18n)

export const categoryLabels: Record<Category, string> = {
    body: 'Krop',
    hair: 'Hår',
    clothes: 'Tøj',
    accessories: 'Ting',
};

// Nøglen er tøjets id (samme som filnavnet i components/icons/clothing/)
export const itemNames: Record<string, string> = {
    BlueOutfit: 'Blå outfit',
    GreenOutfit: 'Grøn sweater',
    YellowOutfit: 'Gul hoodie',
    PinkOutfit: 'Lyserød kjole',
    SpaceOutfit: 'Rumdragt',
};
