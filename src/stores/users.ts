import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/config/firebase';
import { collection, DocumentReference, getDocs, query, where, doc, getDoc, documentId } from 'firebase/firestore';
import type { User } from '@/types/databaseTypes';

export const useUserStore = defineStore('users', () => {

    const currentStudent = ref<User>;
    
    // Henter brugere ud fra et felt, fx alle med en bestemt rolle
    async function fetchUsersWhere(field: string, value: string) {
    // Bygger en forespørgsel med et where-filter
        const q = query(collection(db, 'users'), where(field, '==', value));
        // Kører forespørgslen
        const snapshot = await getDocs(q);

        // Mapper resultaterne til user-objekter
        return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as User);
    }


    return { fetchUsersWhere };
});

