// data/achievements.ts – kopi af jeres eksisterende datafil, med id som dokument-ID
// TODO: "condition" er endnu ikke udfyldt, da betingelserne ikke er fundet i koden. Tilføj dem her, når de er klar
import type { Achievement } from '../types'; // importér typen

export const achievements: Achievement[] = [
    { id: 'firstLanding', title: 'Første landing', description: 'Gennemfør din første aktivitet' },
    { id: 'countryFinder', title: 'Grænsefinder', description: 'Find 5 lande rigtigt i træk', goal: 5 },
    { id: 'phaseMaster', title: 'Fasemester', description: 'Placér is, vand og damp rigtigt på termometeret' },
    { id: 'waterGuesser', title: 'Vandkender', description: 'Gæt mængden af vand i 3 hverdagsting', goal: 3 },
    { id: 'patient', title: 'Tålmodig', description: 'Læs forklaringen på 3 forkerte svar', goal: 3 },
    { id: 'collector', title: 'Samler', description: 'Køb 2 ting i garderoben', goal: 2 },
    { id: 'stylist', title: 'Stylist', description: 'Giv Kosmo en ny hudfarve' },
    { id: 'piggyBank', title: 'Sparegris', description: 'Hav 500 mønter' },
];
