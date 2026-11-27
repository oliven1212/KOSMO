// users.ts – builds the users documents. Auth and users depend on each other, so this always resets Auth first
import { getAuth } from 'firebase-admin/auth';
import { seedAuth } from './auth';
import { personalData } from './data/personalData';
import type { User } from '../src/types';

// Resets Auth and returns every user with its Auth uid as id and its classroomIds from personalData
export async function seedUsers(): Promise<User[]> {
    const authUsers = await seedAuth(getAuth());

    return authUsers.map((user): User => {
        const person = personalData.find((p): boolean => {
            return p.id === user.personalId;
        });

        if (!person) {
            throw new Error(`user ${user.personalId}: findes ikke i personalData`);
        }

        // Classrooms are matched on the e-mail
        return { ...user, classroomIds: person.classroomIds };
    });
}
