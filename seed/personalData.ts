// personalData.ts – builds the personalData documents. Every person gets an Auth user, and its uid is the document ID,
// so this always resets Auth first. The password for every person is their username
import { getAuth } from 'firebase-admin/auth';
import { createAuthUser, wipeAuthUsers } from './auth';
import { emailFor } from './email';
import { personalData } from './data/personalData';
import type { PersonalData } from '@/types/databaseTypes';

// Resets Auth and returns every person with their new Auth uid as id
export async function seedPersonalData(): Promise<PersonalData[]> {
    const auth = getAuth();
    const deleted = await wipeAuthUsers(auth);

    console.log(`✔ auth: ${deleted} gamle brugere slettet`);

    const created: PersonalData[] = [];

    for (const person of personalData) {
        const uid = await createAuthUser(auth, emailFor(person), person.username);

        created.push({ id: uid, ...person });
    }
    console.log(`✔ auth: ${created.length} brugere oprettet`);

    return created;
}
