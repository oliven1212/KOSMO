// index.ts – validerer dataen og skriver den til Firestore (kør med: npx tsx seed/index.ts)
// Kræver serviceAccountKey.json i projektets rod (hentes i Firebase Console, og lægges i .gitignore)
// Der bruges ikke Auth: users får den fulde e-mail som dokument-ID
import { readFileSync } from "fs"; // bruges til at læse nøglefilen
import { initializeApp, cert } from "firebase-admin/app"; // start Admin SDK
import type { ServiceAccount } from "firebase-admin/app"; // start Admin SDK
import { getFirestore } from "firebase-admin/firestore"; // Firestore
import { schools } from "./data/schools"; // skoler
import { classrooms } from "./data/classrooms"; // klasser
import { personalData } from "./data/personalData"; // lærere og elever
import { achievements } from "./data/achievements"; // achievements
import { kosmoCustomization } from "./data/kosmoCustomization"; // kosmo-katalog
import { users } from "./data/users"; // users
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
  for (let i = 0; i < items.length; i += 400) { // batches må max have 500 skrivninger
    const batch = db.batch(); // ny batch
    for (const { id, ...data } of items.slice(i, i + 400)) batch.set(db.collection(name).doc(id), data); // id ud, resten ind
    await batch.commit(); // send batchen
  }
  console.log(`✔ ${name}: ${items.length} dokumenter`); // log resultat
};

const main = async (): Promise<void> => {
  validate(); // tjek referencer før noget skrives
  await writeCollection("schools", schools); // skoler
  await writeCollection("classrooms", classrooms); // klasser
  await writeCollection("achievements", achievements); // achievements
  await writeCollection("kosmoCustomization", kosmoCustomization); // kosmo-katalog
  await writeCollection("personalData", personalData); // lærere og elever
  await writeCollection("users", users); // users (dokument-ID = e-mail)
};

main().then(() => process.exit(0)).catch((e) => { // kør og afslut
  console.error(e); // vis fejl
  process.exit(1); // afslut med fejlkode
});