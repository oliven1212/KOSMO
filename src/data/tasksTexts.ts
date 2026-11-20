// Descriptions
export interface TaskDescription {
    // The title shown and read aloud
    title: string;
    // The list items shown and read aloud
    items: string[];
}

// Texts for the country game's description modal
export const countryGameDescription: TaskDescription = {
    title: 'Find det rigtige land!',
    items: [
        'Se øverst på siden efter hvilket land du skal finde.',
        'Klik på landet når du mener du ved hvor det er.',
        'Landet vil skifte farve og så kan du trykke “Bekræft svar”.',
        'Du vil få af vide om det er rigtigt eller forkert.',
        'Tryk derefter videre til næste opgave.',
    ],
};

// Texts for the country game's description modal
export const waterPhasesGameDescription: TaskDescription = {
    title: 'Vandets tre faser',
    items: [
        'Du skal i denne opgave flytte rundt på tre faser af vand.',
        'Der er et termometer i den ene side som du skal slippe den valgte fase af vand hen på.',
        'Når du er tilfreds skal du bekræfte og gå videre til næste opgave.',
    ],
};
 
// Texts for the country game's description modal
export const waterAmountGameDescription: TaskDescription = {
    title: 'Hverdagens mængde af vand ',
    items: [
        'Du skal i den næste række af opgaver vurder mængden af vand i ting du er bekendt med.',
        'Der er en graf.',
        'Hiv i den hvide cirkel for at bestemme mængden af vand du tror er rigtig.',
        'Der er hints på skærmen for at hjælpe dig.',
        'Når du er tilfreds skal du bekræfte og gå videre til næste opgave.',
    ],
};