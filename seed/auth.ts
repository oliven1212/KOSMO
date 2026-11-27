// auth.ts – deletes ALL Firebase Auth users, then creates one for every email in users
// Used by seedUsers in users.ts. The password for every user is the part of the email before the @
import type { Auth } from 'firebase-admin/auth';
import { users } from './data/users';
import type { UserSeed } from './types';

// Returns the text before the @, used as the password
function passwordFrom(email: string): string {
    return email.split('@')[0] ?? '';
}

// Deletes every Auth user in the project. Returns how many were deleted
async function wipeAuthUsers(auth: Auth): Promise<number> {
    const uids: string[] = [];
    let pageToken: string | undefined = undefined;

    // listUsers returns at most 1000 users per page
    do {
        const page = await auth.listUsers(1000, pageToken);

        uids.push(...page.users.map((user): string => {
            return user.uid;
        }));
        pageToken = page.pageToken;
    } while (pageToken);

    // deleteUsers takes at most 1000 uids per call
    for (let i = 0; i < uids.length; i += 1000) {
        await auth.deleteUsers(uids.slice(i, i + 1000));
    }

    return uids.length;
}

// Wipes all Auth users, creates one per user, and returns the users with their Auth uid as id
export async function seedAuth(auth: Auth): Promise<(UserSeed & { id: string })[]> {
    const deleted = await wipeAuthUsers(auth);

    console.log(`✔ auth: ${deleted} gamle brugere slettet`);

    const created: (UserSeed & { id: string })[] = [];

    for (const user of users) {
        const { uid } = await auth.createUser({ email: user.personalId, password: passwordFrom(user.personalId) });

        created.push({ id: uid, ...user });
    }
    console.log(`✔ auth: ${created.length} brugere oprettet`);

    return created;
}
