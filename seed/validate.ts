// validate.ts – tjekker at alle referencer i seed-dataen peger på noget, der findes (Firestore gør det ikke selv)
import { schools } from "./data/schools"; // skoler
import { classrooms } from "./data/classrooms"; // klasser
import { personalData } from "./data/personalData"; // lærere og elever
import { achievements } from "./data/achievements"; // achievements
import { kosmoCustomization } from "./data/kosmoCustomization"; // kosmo-katalog
import { users } from "./data/users"; // users

// laver et sæt af ID'er ud fra en liste af dokumenter
const idsOf = (list: { id: string }[]): Set<string> => new Set(list.map((x) => x.id));

export const findErrors = (): string[] => {
  const errors: string[] = []; // samler fejl
  const schoolIds = idsOf(schools); // alle skole-ID'er
  const classIds = idsOf(classrooms); // alle klasse-ID'er
  const usernames = new Set(personalData.map((p): string => {
    return p.username;
  })); // all usernames
  const achievementIds = idsOf(achievements); // alle achievement-ID'er
  const customizationIds = idsOf(kosmoCustomization); // alle kosmo-ting
  const categoryById = new Map(kosmoCustomization.map((c) => [c.id, c.category])); // ID -> kategori
  const freeIds = new Set(kosmoCustomization.filter((c) => c.price === undefined).map((c) => c.id)); // gratis standardting

  // personalData and users have no id in the data, so duplicates are checked on the username (the users document ID, and Auth refuses the same e-mail twice)
  const personIds = personalData.map((p): { id: string } => {
    return { id: p.username };
  });
  const userIds = users.map((u): { id: string } => {
    return { id: u.personalId };
  });
  for (const [name, list] of Object.entries({ schools, classrooms, personalData: personIds, achievements, kosmoCustomization, users: userIds })) { // dubletter i samme collection
    const seen = new Set<string>(); // ID'er set indtil nu
    for (const { id } of list) { // gå alle dokumenter igennem
      if (seen.has(id)) errors.push(`${name}: ID ${id} findes to gange`); // samme ID to gange overskriver hinanden
      seen.add(id); // husk ID'et
    }
  }
  for (const c of classrooms) if (!schoolIds.has(c.schoolId)) errors.push(`classroom ${c.id}: ukendt schoolId ${c.schoolId}`); // klasse -> skole
  for (const p of personalData) for (const id of p.classroomIds) if (!classIds.has(id)) errors.push(`personalData ${p.username}: ukendt classroomId ${id}`); // person -> klasse
  for (const p of personalData) if (p.classroomIds.length === 0) errors.push(`personalData ${p.username}: har ingen klasser, så e-mailen kan ikke laves`); // the e-mail comes from the first classroom's school
  for (const u of users) {
    if (!usernames.has(u.personalId)) errors.push(`user ${u.personalId}: ${u.personalId} findes ikke i personalData`); // user -> person
    for (const a of u.unlockedAchievementIds ?? []) if (!achievementIds.has(a)) errors.push(`user ${u.personalId}: ukendt achievement ${a}`); // user -> achievement
    const studentOnly = [u.coins, u.xp, u.unlockedAchievementIds, u.kosmo]; // felter kun elever bruger
    if (u.role === "student" && studentOnly.some((v) => v === undefined)) errors.push(`user ${u.personalId}: elever mangler coins, xp, achievements eller kosmo`); // elever skal have dem alle
    if (u.role === "teacher" && studentOnly.some((v) => v !== undefined)) errors.push(`user ${u.personalId}: lærere må ikke have coins, xp, achievements eller kosmo`); // lærere må ingen have
    if (!u.kosmo) continue; // ingen kosmo, så er der ikke mere at tjekke
    for (const c of u.kosmo.unlockedClothingIds) if (!customizationIds.has(c)) errors.push(`user ${u.personalId}: ukendt tøj ${c}`); // user -> oplåst tøj
    for (const [slot, id] of Object.entries(u.kosmo.equippedClothing)) { // gå alle påtagne ting igennem
      if (!customizationIds.has(id)) errors.push(`user ${u.personalId}: ukendt påtaget ting ${id}`); // påtaget skal findes
      if (!u.kosmo.unlockedClothingIds.includes(id) && !freeIds.has(id)) errors.push(`user ${u.personalId}: ${id} er påtaget men ikke låst op`); // påtaget skal være købt, eller gratis standard
      if (categoryById.get(id) !== slot) errors.push(`user ${u.personalId}: ${id} ligger i slot "${slot}", men hører til "${categoryById.get(id)}"`); // slot skal passe til kategorien
    }
  }
  return errors; // tom liste = alt ok
};