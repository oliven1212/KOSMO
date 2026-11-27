import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/config/firebase';
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';
import type { School } from '@/types/databaseTypes';

// Opretter og eksporterer storen med id 'schools'
export const useSchoolStore = defineStore('schools', () => {
    // Hentede skoler gemt med skolens id som nøgle, så de er nemme at slå op
    const schools = ref<Record<string, School>>({});

    // Henter de skoler der mangler ud fra en liste af id'er, returnerer ingenting
    async function fetchSchoolsByIds(ids: string[]): Promise<void> {
        // Fjerner dubletter og skoler vi allerede har hentet
        const missingIds = [...new Set(ids)].filter((id) => !(id in schools.value));

        // Stopper hvis alle skoler allerede er hentet (sparer reads)
        if (missingIds.length === 0) {
            return;
        }

        // Deler id'erne i grupper på max 30, fordi en in-query ikke må have flere
        const chunks: string[][] = [];

        // Løber igennem id'erne 30 ad gangen
        for (let i = 0; i < missingIds.length; i += 30) {
        // Tilføjer en gruppe på op til 30 id'er
            chunks.push(missingIds.slice(i, i + 30));
        }

        // Kører én query pr. gruppe parallelt
        const snapshots = await Promise.all(
        // Henter skoler hvis dokument-id er i gruppen
            chunks.map((chunk) =>
                getDocs(query(collection(db, 'schools'), where(documentId(), 'in', chunk))),
            ),
        );

        // Gemmer hver hentet skole i state under sit id
        for (const snap of snapshots) {
        // Løber igennem dokumenterne i dette snapshot
            for (const d of snap.docs) {
                // Tilføjer skolen med id og data
                schools.value[d.id] = { id: d.id, ...d.data() } as School;
            }
        }
    }

    // Gør state og funktion tilgængelige uden for storen
    return { schools, fetchSchoolsByIds };
});