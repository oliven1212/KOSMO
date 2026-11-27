import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { db } from '@/config/firebase';
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';
import { useSchoolStore } from '@/stores/schools';
import type { Classroom } from '@/types/databaseTypes';

export interface ClassroomWithSchool extends Classroom {
    schoolName: string;
}

export const useClassroomStore = defineStore('classrooms', () => {

    const schoolStore = useSchoolStore();

    const classrooms = ref<Classroom[]>([]);
    const isLoading = ref(false);

    // Classrooms med skolens navn lagt på (opdaterer sig selv når skolerne er hentet)
    const classroomsWithSchool = computed((): ClassroomWithSchool[] =>
        // Går igennem hver classroom
        classrooms.value.map((c) => ({
        // Beholder alle classroom-felterne
            ...c,
            // Slår skolens navn op via schoolId, tom streng hvis skolen ikke er hentet endnu
            schoolName: schoolStore.schools[c.schoolId]?.name ?? '',
        })),
    );

    // Aktive classrooms, nu baseret på listen med skolenavn
    const activeClassrooms = computed((): ClassroomWithSchool[] =>
        // Beholder dem hvor isActive er true
        classroomsWithSchool.value.filter((c) => c.isActive),
    );
    // Inaktive classrooms, nu baseret på listen med skolenavn
    const inactiveClassrooms = computed((): ClassroomWithSchool[] =>
        // Beholder dem hvor isActive er false
        classroomsWithSchool.value.filter((c) => !c.isActive),
    );


    // Henter brugere ud fra et felt, fx alle med en bestemt rolle
    async function fetchClassrooms(ids: string[]): Promise<void> {

        // Hvis der ingen id'er er, tømmes listen (in-query må ikke være tom)
        if (ids.length === 0) {
            // Tømmer listen
            classrooms.value = [];
            // Stopper funktionen her
            return;
        }
        // Slår loading til
        isLoading.value = true;
        // try/finally sikrer at loading altid slås fra igen, også ved fejl
        try {
        // Her samles id'erne i grupper, fordi en in-query max må have 30 værdier
            const chunks: string[][] = [];

            // Løber igennem id'erne 30 ad gangen
            for (let i = 0; i < ids.length; i += 30) {
                // Tilføjer en gruppe på op til 30 id'er
                chunks.push(ids.slice(i, i + 30));
            }

            // Kører én query pr. gruppe parallelt
            const snapshots = await Promise.all(
                // Bygger og kører query'en for hver gruppe
                chunks.map((chunk) =>
                // Henter classrooms hvis dokument-id er i gruppen
                    getDocs(query(collection(db, 'classrooms'), where(documentId(), 'in', chunk))),
                ),
            );

            // Samler alle resultater i én liste og tilføjer dokument-id'et
            classrooms.value = snapshots.flatMap((snap) =>
                // Mapper hvert dokument til et classroom-objekt
                snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Classroom),
            );

            await schoolStore.fetchSchoolsByIds(classrooms.value.map((c) => c.schoolId));

        } finally {
            // Slår loading fra igen
            isLoading.value = false;
        }
    }


    return { classrooms, isLoading, classroomsWithSchool , activeClassrooms, inactiveClassrooms, fetchClassrooms };
});
