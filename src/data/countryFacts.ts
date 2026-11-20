// Shown for every country that has no fact of its own yet
const FALLBACK_FACT = 'Der er mange spændende ting at opdage i dette land.';

// A short fact per country, keyed by ADM0_A3 code (add more here)
const countryFacts: Record<string, string> = {
    // Vatican City
    VAT: 'Vatikanstaten er verdens mindste land.',
    // Iceland
    ISL: 'Island har mange vulkaner og varme kilder.',
    // Denmark
    DNK: 'Danmark har over 400 navngivne øer.',
    // Japan
    JPN: 'Japan består af mere end 6.000 øer.',
    // Nepal
    NPL: 'Mount Everest, verdens højeste bjerg, ligger på grænsen mellem Nepal og Kina.',
    // Egypt
    EGY: 'I Egypten ligger pyramiderne ved Giza, som er over 4.000 år gamle.',
    // Madagascar
    MDG: 'Mange af dyrene på Madagaskar, for eksempel lemurer, findes ikke andre steder i verden.',
    // South Africa
    ZAF: 'Sydafrika har tre hovedstæder: Pretoria, Cape Town og Bloemfontein.',
    // Brazil
    BRA: 'Brasilien er Sydamerikas største land, og over halvdelen af Amazonas-regnskoven ligger der.',
    // Peru
    PER: 'I Peru ligger Machu Picchu, en gammel inkaby højt oppe i bjergene.',
};

// Return the fact for a country, or the fallback fact if it has none yet
export function getCountryFact(code: string): string {
    // Look up the code in the list above, and use the fallback if it is missing
    return countryFacts[code] ?? FALLBACK_FACT;
}