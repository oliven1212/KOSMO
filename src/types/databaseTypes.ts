// types.ts – interfaces til alle dokumenter i Firestore
// Alle interfaces har et "id" i seed-filerne. Det bliver dokument-ID'et og gemmes IKKE som felt i dokumentet.

export type Role = 'teacher' | 'student'; // de to roller i appen
export type Category = 'hair' | 'clothing' | 'items'; // faner i garderoben der hentes fra databasen (krop ligger i koden)

export interface School {
  id: string; // dokument-ID
  name: string; // skolens navn
}

export interface Classroom {
  id: string; // dokument-ID
  name: string; // fx "3.A"
  isActive: boolean; // true når en lærer har oprettet klassen i appen (så findes elevernes users)
  schoolId: string; // reference til schools
}

export interface PersonalData {
  id: string; // dokument-ID = e-mail (lowercase)
  name: string; // navn fra "staten"
  classroomIds: string[]; // klasser personen tilhører
}

export interface Achievement {
  id: string; // dokument-ID (fx "firstLanding")
  title: string; // titel
  description: string; // beskrivelse
  goal?: number; // hvor mange gange det skal ske (uden goal er én gang nok)
  condition?: string; // TODO: betingelsen. Format er ikke besluttet endnu, så feltet er tomt i seed-dataen
}

export interface KosmoCustomization {
  id: string; // dokument-ID
  name: string; // navn som vises i appen (fx "Gul hoodie")
  category: Category; // hovedkategori = fane i garderoben (og slot-navn i equippedClothing)
  svgName?: string; // SVG-fil der tegnes
  price?: number; // pris i mønter
}

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
  coins?: number; // mønter (kun elever)
  xp?: number; // erfaringspoint (kun elever)
  unlockedAchievementIds?: string[]; // oplåste achievements (kun elever)
  kosmo?: Kosmo; // indlejret map (kun elever har en kosmo, lærere har ingen)
}

export type UserSeed = Omit<User, 'id'> & { id?: string }; // id mangler for lærere, så slås uid op i Auth