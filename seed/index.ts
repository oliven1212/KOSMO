// index.ts – validerer dataen og skriver den til Firestore (kør med: npm run seed)
// Kræver serviceAccountKey.json i projektets rod (hentes i Firebase Console, og lægges i .gitignore)
import { readFileSync } from "fs"; // bruges til at læse nøglefilen
import { initializeApp, cert } from "firebase-admin/app"; // start Admin SDK
import type { ServiceAccount } from "firebase-admin/app"; // start Admin SDK
import { getFirestore } from "firebase-admin/firestore"; // Firestore
import { seedPersonalData } from "./personalData"; // resets Auth and builds personalData
import { seedUsers } from "./users"; // builds the users
import { schools } from "./data/schools"; // skoler
import { classrooms } from "./data/classrooms"; // klasser
import { achievements } from "./data/achievements"; // achievements
import { kosmoCustomization } from "./data/kosmoCustomization"; // kosmo-katalog
import { findErrors } from "./validate"; // tjek af referencer

const keyPath = process.env.SERVICE_ACCOUNT_PATH ?? "./serviceAccountKey.json"; // sti til nøglen
const serviceAccount = JSON.parse(readFileSync(keyPath, "utf-8")) as ServiceAccount; // læs nøglen
initializeApp({ credential: cert(serviceAccount) }); // log ind som admin
const db = getFirestore(); // reference til databasen
db.settings({ ignoreUndefinedProperties: true }); // spring felter over, der er undefined

// stopper hvis nogen referencer er brudt
const validate = (): void => {
  const errors = findErrors(); // find brudte referencer
  if (errors.length > 0) { // stop hvis noget er galt
    console.error(`✘ ${errors.length} fejl:\n${errors.join("\n")}`); // vis alle fejl
    process.exit(1); // afslut med fejlkode
  }
  console.log("✔ Validering ok"); // alt peger det rigtige sted hen
};

// skriver en liste til en collection (id bliver dokument-ID, resten bliver felterne)
const writeCollection = async (name: string, items: { id: string }[]): Promise<void> => {
  await db.recursiveDelete(db.collection(name)); // removes all old documents first, so nothing is left over or duplicated
  for (let i = 0; i < items.length; i += 400) { // batches må max have 500 skrivninger
    const batch = db.batch(); // ny batch
    for (const { id, ...data } of items.slice(i, i + 400)) batch.set(db.collection(name).doc(id), data); // id ud, resten ind
    await batch.commit(); // send batchen
  }
  console.log(`✔ ${name}: ${items.length} dokumenter`); // log resultat
};

const main = async (): Promise<void> => {
  validate(); // tjek referencer før noget skrives
  await writeCollection("kosmoCustomization", kosmoCustomization); // kosmo-katalog
  await writeCollection("achievements", achievements); // achievements
  await writeCollection("schools", schools); // skoler
  await writeCollection("classrooms", classrooms); // klasser
  await writeCollection("personalData", await seedPersonalData()); // Auth + lærere og elever (document ID = Auth uid)
  await writeCollection("users", seedUsers()); // users (document ID = username)
};

main().then(() => process.exit(0)).catch((e) => { // kør og afslut
  console.error(e); // vis fejl
  process.exit(1); // afslut med fejlkode
});
