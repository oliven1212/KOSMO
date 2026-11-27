// Global types shared by the app and the seeders

export type Role = 'teacher' | 'student'; // de to roller i appen

export interface Kosmo {
    kosmoName: string; // kosmos navn
    skinColor: string; // valgt hudfarve som nøgle fra koden (fx "mint"). Fjern feltet, hvis det gemmes et andet sted
    equippedClothing: Record<string, string>; // slot (= category) -> kosmoCustomization-ID
    unlockedClothingIds: string[]; // alt kosmo har låst op
}

export interface User {
    id: string; // dokument-ID = Auth uid
    personalId: string; // reference til personalData (= e-mailen)
    role: Role; // lærer eller elev
    classroomIds: string[]; // copied from personalData when seeding (teachers can have more than one)
    coins?: number; // mønter (kun elever)
    xp?: number; // erfaringspoint (kun elever)
    unlockedAchievementIds?: string[]; // oplåste achievements (kun elever)
    kosmo?: Kosmo; // indlejret map (kun elever har en kosmo, lærere har ingen)
}
