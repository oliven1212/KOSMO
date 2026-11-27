// users.ts – builds the users documents from the users data and the matching personalData
import { emailFor } from './email';
import { personalData } from './data/personalData';
import { users } from './data/users';
import type { User } from '@/types/databaseTypes';

// Returns every user with their username as id, their e-mail and their classroomIds from personalData
export function seedUsers(): User[] {
    return users.map((user): User => {
        const person = personalData.find((p): boolean => {
            return p.username === user.personalId;
        });

        if (!person) {
            throw new Error(`user ${user.personalId}: findes ikke i personalData`);
        }

        return { id: person.username, email: emailFor(person), classroomIds: person.classroomIds, ...user };
    });
}
