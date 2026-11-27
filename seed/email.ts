// email.ts – builds a person's e-mail from their username and their school's emailSuffix
import { classrooms } from './data/classrooms';
import { schools } from './data/schools';
import type { PersonalData } from '@/types/databaseTypes';

// Finds the school through the person's first classroom and returns username + emailSuffix
export function emailFor(person: Pick<PersonalData, 'username' | 'classroomIds'>): string {
    const classroom = classrooms.find((c): boolean => {
        return c.id === person.classroomIds[0];
    });
    const school = schools.find((s): boolean => {
        return s.id === classroom?.schoolId;
    });

    if (!school) {
        throw new Error(`${person.username}: ingen skole fundet via klasserne`);
    }

    return person.username + school.emailSuffix;
}
