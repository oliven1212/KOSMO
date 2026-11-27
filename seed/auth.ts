// auth.ts – Firebase Auth helpers for the personalData seeder
import type { Auth } from 'firebase-admin/auth';

// Deletes every Auth user in the project. Returns how many were deleted
export async function wipeAuthUsers(auth: Auth): Promise<number> {
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

// Creates an Auth user and returns its uid
export async function createAuthUser(auth: Auth, email: string, password: string): Promise<string> {
    const { uid } = await auth.createUser({ email, password });

    return uid;
}
