// data/users.ts – users for lærere og for elever i klasser med isActive = true (statiske data)
// Dokument-ID = personens fulde e-mail (samme som personalData). Der er ikke oprettet noget i Auth endnu
// Lærere har kun personalId og role. Elever har også coins, xp, achievements og kosmo
// Elever der ikke har købt tøj har standardoutfittet (gul hoodie, uden pris) på. Det tæller ikke som oplåst/købt
import type { User } from '@/types/databaseTypes'; // importér typen

export const users: User[] = [
  // LÆRERE
  { id: "mekj69255@sondermark.test.dk", personalId: "mekj69255@sondermark.test.dk", role: "teacher" }, // Mette Kjær
  { id: "soba54617@sondermark.test.dk", personalId: "soba54617@sondermark.test.dk", role: "teacher" }, // Søren Bak
  { id: "liho91386@sondermark.test.dk", personalId: "liho91386@sondermark.test.dk", role: "teacher" }, // Lise Holm
  { id: "peve88912@sondermark.test.dk", personalId: "peve88912@sondermark.test.dk", role: "teacher" }, // Peter Vester
  { id: "cani68542@elmelund.test.dk", personalId: "cani68542@elmelund.test.dk", role: "teacher" }, // Camilla Nielsen
  { id: "thda77877@elmelund.test.dk", personalId: "thda77877@elmelund.test.dk", role: "teacher" }, // Thomas Dalgaard
  { id: "habr64562@elmelund.test.dk", personalId: "habr64562@elmelund.test.dk", role: "teacher" }, // Hanne Brandt
  { id: "kejo79061@elmelund.test.dk", personalId: "kejo79061@elmelund.test.dk", role: "teacher" }, // Kenny Jordsen
  { id: "risa99971@elmelund.test.dk", personalId: "risa99971@elmelund.test.dk", role: "teacher" }, // Rikke Sandberg

  // ELEVER i 3.A, Søndermarkskolen
  // Emma Nielsen
  {
    id: "emni74871@sondermark.test.dk",
    personalId: "emni74871@sondermark.test.dk",
    role: "student",
    coins: 20,
    xp: 0,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Noah Sørensen
  {
    id: "noso61371@sondermark.test.dk",
    personalId: "noso61371@sondermark.test.dk",
    role: "student",
    coins: 57,
    xp: 53,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Bamse",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_green_outfit", hair: "cust_hair_ponytail" },
      unlockedClothingIds: ["cust_clothing_green_outfit", "cust_hair_ponytail", "cust_clothing_yellow_outfit"],
    },
  },
  // Ida Thomsen
  {
    id: "idth42953@sondermark.test.dk",
    personalId: "idth42953@sondermark.test.dk",
    role: "student",
    coins: 94,
    xp: 106,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_pink_outfit", items: "cust_items_cap" },
      unlockedClothingIds: ["cust_clothing_pink_outfit", "cust_items_cap", "cust_clothing_yellow_outfit"],
    },
  },
  // William Jakobsen
  {
    id: "wija42357@sondermark.test.dk",
    personalId: "wija42357@sondermark.test.dk",
    role: "student",
    coins: 131,
    xp: 159,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Freja Schmidt
  {
    id: "frsc93845@sondermark.test.dk",
    personalId: "frsc93845@sondermark.test.dk",
    role: "student",
    coins: 168,
    xp: 212,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_blue_outfit", "cust_clothing_yellow_outfit"],
    },
  },
  // Oscar Iversen
  {
    id: "osiv63249@sondermark.test.dk",
    personalId: "osiv63249@sondermark.test.dk",
    role: "student",
    coins: 205,
    xp: 265,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_green_outfit", hair: "cust_hair_afro" },
      unlockedClothingIds: ["cust_clothing_green_outfit", "cust_hair_afro", "cust_clothing_yellow_outfit"],
    },
  },
  // Alma Hansen
  {
    id: "alha34221@sondermark.test.dk",
    personalId: "alha34221@sondermark.test.dk",
    role: "student",
    coins: 42,
    xp: 18,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Lucas Jørgensen
  {
    id: "lujo72739@sondermark.test.dk",
    personalId: "lujo72739@sondermark.test.dk",
    role: "student",
    coins: 79,
    xp: 71,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_space_outfit", items: "cust_items_backpack" },
      unlockedClothingIds: ["cust_clothing_space_outfit", "cust_items_backpack", "cust_clothing_yellow_outfit"],
    },
  },
  // Clara Poulsen
  {
    id: "clpo25776@sondermark.test.dk",
    personalId: "clpo25776@sondermark.test.dk",
    role: "student",
    coins: 116,
    xp: 124,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_blue_outfit", "cust_clothing_yellow_outfit"],
    },
  },
  // Victor Olesen
  {
    id: "viol85648@sondermark.test.dk",
    personalId: "viol85648@sondermark.test.dk",
    role: "student",
    coins: 153,
    xp: 177,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit", hair: "cust_hair_pigtails" },
      unlockedClothingIds: ["cust_hair_pigtails", "cust_clothing_yellow_outfit"],
    },
  },

  // ELEVER i 5.X, Elmelundskolen
  // Olivia Mikkelsen
  {
    id: "olmi84348@elmelund.test.dk",
    personalId: "olmi84348@elmelund.test.dk",
    role: "student",
    coins: 190,
    xp: 230,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_pink_outfit", "cust_clothing_yellow_outfit"],
    },
  },
  // Malthe Eriksen
  {
    id: "maer96383@elmelund.test.dk",
    personalId: "maer96383@elmelund.test.dk",
    role: "student",
    coins: 27,
    xp: 283,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_space_outfit", "cust_clothing_yellow_outfit"],
    },
  },
  // Josefine Jeppesen
  {
    id: "joje69210@elmelund.test.dk",
    personalId: "joje69210@elmelund.test.dk",
    role: "student",
    coins: 64,
    xp: 36,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit", items: "cust_items_cap" },
      unlockedClothingIds: ["cust_items_cap", "cust_clothing_yellow_outfit"],
    },
  },
  // Alfred Pedersen
  {
    id: "alpe52551@elmelund.test.dk",
    personalId: "alpe52551@elmelund.test.dk",
    role: "student",
    coins: 101,
    xp: 89,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Bamse",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_green_outfit", hair: "cust_hair_braids" },
      unlockedClothingIds: ["cust_clothing_green_outfit", "cust_hair_braids", "cust_clothing_yellow_outfit"],
    },
  },
  // Nora Petersen
  {
    id: "nope45017@elmelund.test.dk",
    personalId: "nope45017@elmelund.test.dk",
    role: "student",
    coins: 138,
    xp: 142,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_pink_outfit", "cust_clothing_yellow_outfit"],
    },
  },
  // Valdemar Johansen
  {
    id: "vajo60487@elmelund.test.dk",
    personalId: "vajo60487@elmelund.test.dk",
    role: "student",
    coins: 175,
    xp: 195,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Karla Frederiksen
  {
    id: "kafr91668@elmelund.test.dk",
    personalId: "kafr91668@elmelund.test.dk",
    role: "student",
    coins: 212,
    xp: 248,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_blue_outfit", "cust_clothing_yellow_outfit"],
    },
  },
  // Elias Simonsen
  {
    id: "elsi19797@elmelund.test.dk",
    personalId: "elsi19797@elmelund.test.dk",
    role: "student",
    coins: 49,
    xp: 1,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_green_outfit", hair: "cust_hair_long", items: "cust_items_backpack" },
      unlockedClothingIds: ["cust_clothing_green_outfit", "cust_hair_long", "cust_items_backpack", "cust_clothing_yellow_outfit"],
    },
  },
  // Asta Bruun
  {
    id: "asbr24888@elmelund.test.dk",
    personalId: "asbr24888@elmelund.test.dk",
    role: "student",
    coins: 86,
    xp: 54,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Mathias Christensen
  {
    id: "mach94128@elmelund.test.dk",
    personalId: "mach94128@elmelund.test.dk",
    role: "student",
    coins: 123,
    xp: 107,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_space_outfit", "cust_clothing_yellow_outfit"],
    },
  },

  // ELEVER i 3.B, Søndermarkskolen
  // Ella Kristiansen
  {
    id: "elkr37052@sondermark.test.dk",
    personalId: "elkr37052@sondermark.test.dk",
    role: "student",
    coins: 98,
    xp: 115,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit"],
    },
  },
  // Emil Mogensen
  {
    id: "emmo28556@sondermark.test.dk",
    personalId: "emmo28556@sondermark.test.dk",
    role: "student",
    coins: 152,
    xp: 207,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_afro"],
    },
  },
  // Sofie Andersen
  {
    id: "soan21075@sondermark.test.dk",
    personalId: "soan21075@sondermark.test.dk",
    role: "student",
    coins: 217,
    xp: 54,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit"],
    },
  },
  // Magnus Madsen
  {
    id: "mama92596@sondermark.test.dk",
    personalId: "mama92596@sondermark.test.dk",
    role: "student",
    coins: 60,
    xp: 234,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_afro", "cust_hair_mohawk"],
    },
  },
  // Agnes Møller
  {
    id: "agmo29477@sondermark.test.dk",
    personalId: "agmo29477@sondermark.test.dk",
    role: "student",
    coins: 125,
    xp: 47,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_pigtails", "cust_items_bow"],
    },
  },
  // Mikkel Laursen
  {
    id: "mila65432@sondermark.test.dk",
    personalId: "mila65432@sondermark.test.dk",
    role: "student",
    coins: 151,
    xp: 102,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_bangs"],
    },
  },
  // Laura Clausen
  {
    id: "lacl22005@sondermark.test.dk",
    personalId: "lacl22005@sondermark.test.dk",
    role: "student",
    coins: 136,
    xp: 219,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_mohawk", "cust_items_round_glasses"],
    },
  },
  // Frederik Winther
  {
    id: "frwi10616@sondermark.test.dk",
    personalId: "frwi10616@sondermark.test.dk",
    role: "student",
    coins: 100,
    xp: 129,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_mohawk", "cust_items_cap"],
    },
  },
  // Maja Larsen
  {
    id: "mala94289@sondermark.test.dk",
    personalId: "mala94289@sondermark.test.dk",
    role: "student",
    coins: 130,
    xp: 78,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_braids"],
    },
  },
  // Anton Olsen
  {
    id: "anol87610@sondermark.test.dk",
    personalId: "anol87610@sondermark.test.dk",
    role: "student",
    coins: 176,
    xp: 265,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit"],
    },
  },

  // ELEVER i 4.A, Søndermarkskolen
  // Olivia Knudsen
  {
    id: "olkn61673@sondermark.test.dk",
    personalId: "olkn61673@sondermark.test.dk",
    role: "student",
    coins: 49,
    xp: 138,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_braids"],
    },
  },
  // Malthe Lund
  {
    id: "malu18017@sondermark.test.dk",
    personalId: "malu18017@sondermark.test.dk",
    role: "student",
    coins: 48,
    xp: 133,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_long", "cust_hair_curls"],
    },
  },
  // Josefine Andreasen
  {
    id: "joan86689@sondermark.test.dk",
    personalId: "joan86689@sondermark.test.dk",
    role: "student",
    coins: 29,
    xp: 14,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_items_backpack"],
    },
  },
  // Alfred Jensen
  {
    id: "alje58680@sondermark.test.dk",
    personalId: "alje58680@sondermark.test.dk",
    role: "student",
    coins: 79,
    xp: 49,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_long", "cust_hair_afro", "cust_items_round_glasses"],
    },
  },
  // Nora Rasmussen
  {
    id: "nora40020@sondermark.test.dk",
    personalId: "nora40020@sondermark.test.dk",
    role: "student",
    coins: 18,
    xp: 0,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_pigtails"],
    },
  },
  // Valdemar Christiansen
  {
    id: "vach98242@sondermark.test.dk",
    personalId: "vach98242@sondermark.test.dk",
    role: "student",
    coins: 91,
    xp: 282,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit"],
    },
  },
  // Karla Mikkelsen
  {
    id: "kami63007@sondermark.test.dk",
    personalId: "kami63007@sondermark.test.dk",
    role: "student",
    coins: 103,
    xp: 84,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_long", "cust_items_headphones"],
    },
  },
  // Elias Eriksen
  {
    id: "eler83434@sondermark.test.dk",
    personalId: "eler83434@sondermark.test.dk",
    role: "student",
    coins: 95,
    xp: 122,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_mohawk", "cust_hair_long", "cust_items_cap"],
    },
  },
  // Asta Jeppesen
  {
    id: "asje85794@sondermark.test.dk",
    personalId: "asje85794@sondermark.test.dk",
    role: "student",
    coins: 35,
    xp: 223,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_afro"],
    },
  },
  // Mathias Pedersen
  {
    id: "mape26736@sondermark.test.dk",
    personalId: "mape26736@sondermark.test.dk",
    role: "student",
    coins: 131,
    xp: 32,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_bangs"],
    },
  },

  // ELEVER i 4.B, Søndermarkskolen
  // Signe Petersen
  {
    id: "sipe81805@sondermark.test.dk",
    personalId: "sipe81805@sondermark.test.dk",
    role: "student",
    coins: 37,
    xp: 78,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_bangs"],
    },
  },
  // August Johansen
  {
    id: "aujo26914@sondermark.test.dk",
    personalId: "aujo26914@sondermark.test.dk",
    role: "student",
    coins: 183,
    xp: 250,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_long", "cust_hair_ponytail", "cust_items_teddy"],
    },
  },
  // Liva Frederiksen
  {
    id: "lifr10071@sondermark.test.dk",
    personalId: "lifr10071@sondermark.test.dk",
    role: "student",
    coins: 105,
    xp: 247,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_spikes", "cust_hair_bun", "cust_items_teddy"],
    },
  },
  // Rasmus Simonsen
  {
    id: "rasi80618@sondermark.test.dk",
    personalId: "rasi80618@sondermark.test.dk",
    role: "student",
    coins: 18,
    xp: 236,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit"],
    },
  },
  // Ellen Bruun
  {
    id: "elbr73471@sondermark.test.dk",
    personalId: "elbr73471@sondermark.test.dk",
    role: "student",
    coins: 65,
    xp: 149,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Bamse",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_mohawk", "cust_hair_bun", "cust_items_bow"],
    },
  },
  // Jonas Christensen
  {
    id: "joch34178@sondermark.test.dk",
    personalId: "joch34178@sondermark.test.dk",
    role: "student",
    coins: 146,
    xp: 250,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_items_umbrella"],
    },
  },
  // Selma Kristensen
  {
    id: "sekr60545@sondermark.test.dk",
    personalId: "sekr60545@sondermark.test.dk",
    role: "student",
    coins: 147,
    xp: 106,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_green_outfit"],
    },
  },
  // Villads Mortensen
  {
    id: "vimo14359@sondermark.test.dk",
    personalId: "vimo14359@sondermark.test.dk",
    role: "student",
    coins: 152,
    xp: 289,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_ponytail", "cust_hair_pigtails"],
    },
  },
  // Mille Henriksen
  {
    id: "mihe20625@sondermark.test.dk",
    personalId: "mihe20625@sondermark.test.dk",
    role: "student",
    coins: 49,
    xp: 225,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_bangs", "cust_items_umbrella"],
    },
  },
  // Tobias Svendsen
  {
    id: "tosv49839@sondermark.test.dk",
    personalId: "tosv49839@sondermark.test.dk",
    role: "student",
    coins: 50,
    xp: 188,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_curls", "cust_hair_pigtails", "cust_items_sunglasses"],
    },
  },

  // ELEVER i 5.A, Søndermarkskolen
  // Emma Jensen
  {
    id: "emje38188@sondermark.test.dk",
    personalId: "emje38188@sondermark.test.dk",
    role: "student",
    coins: 143,
    xp: 251,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_mohawk", "cust_items_crown"],
    },
  },
  // Noah Rasmussen
  {
    id: "nora76116@sondermark.test.dk",
    personalId: "nora76116@sondermark.test.dk",
    role: "student",
    coins: 73,
    xp: 251,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit"],
    },
  },
  // Ida Christiansen
  {
    id: "idch87824@sondermark.test.dk",
    personalId: "idch87824@sondermark.test.dk",
    role: "student",
    coins: 22,
    xp: 142,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_braids"],
    },
  },
  // William Mikkelsen
  {
    id: "wimi40443@sondermark.test.dk",
    personalId: "wimi40443@sondermark.test.dk",
    role: "student",
    coins: 133,
    xp: 96,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_afro"],
    },
  },
  // Freja Eriksen
  {
    id: "frer26108@sondermark.test.dk",
    personalId: "frer26108@sondermark.test.dk",
    role: "student",
    coins: 84,
    xp: 230,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_spikes", "cust_hair_bun", "cust_items_sunglasses"],
    },
  },
  // Oscar Jeppesen
  {
    id: "osje19591@sondermark.test.dk",
    personalId: "osje19591@sondermark.test.dk",
    role: "student",
    coins: 163,
    xp: 241,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_bangs"],
    },
  },
  // Alma Pedersen
  {
    id: "alpe36260@sondermark.test.dk",
    personalId: "alpe36260@sondermark.test.dk",
    role: "student",
    coins: 42,
    xp: 1,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_spikes"],
    },
  },
  // Lucas Petersen
  {
    id: "lupe27809@sondermark.test.dk",
    personalId: "lupe27809@sondermark.test.dk",
    role: "student",
    coins: 80,
    xp: 19,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit"],
    },
  },
  // Clara Johansen
  {
    id: "cljo48790@sondermark.test.dk",
    personalId: "cljo48790@sondermark.test.dk",
    role: "student",
    coins: 163,
    xp: 222,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_items_umbrella"],
    },
  },
  // Victor Frederiksen
  {
    id: "vifr94132@sondermark.test.dk",
    personalId: "vifr94132@sondermark.test.dk",
    role: "student",
    coins: 83,
    xp: 193,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bamse",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_clothing_pink_outfit", "cust_items_headphones"],
    },
  },

  // ELEVER i 5.C, Søndermarkskolen
  // Ella Simonsen
  {
    id: "elsi13713@sondermark.test.dk",
    personalId: "elsi13713@sondermark.test.dk",
    role: "student",
    coins: 217,
    xp: 17,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_clothing_green_outfit", "cust_hair_spikes", "cust_items_round_glasses"],
    },
  },
  // Emil Bruun
  {
    id: "embr61896@sondermark.test.dk",
    personalId: "embr61896@sondermark.test.dk",
    role: "student",
    coins: 70,
    xp: 25,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Sofie Christensen
  {
    id: "soch14201@sondermark.test.dk",
    personalId: "soch14201@sondermark.test.dk",
    role: "student",
    coins: 81,
    xp: 125,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_mohawk", "cust_hair_spikes"],
    },
  },
  // Magnus Kristensen
  {
    id: "makr59394@sondermark.test.dk",
    personalId: "makr59394@sondermark.test.dk",
    role: "student",
    coins: 141,
    xp: 160,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_clothing_green_outfit", "cust_hair_mohawk"],
    },
  },
  // Agnes Mortensen
  {
    id: "agmo74666@sondermark.test.dk",
    personalId: "agmo74666@sondermark.test.dk",
    role: "student",
    coins: 203,
    xp: 176,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_long"],
    },
  },
  // Mikkel Henriksen
  {
    id: "mihe18327@sondermark.test.dk",
    personalId: "mihe18327@sondermark.test.dk",
    role: "student",
    coins: 87,
    xp: 176,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_items_sunglasses"],
    },
  },
  // Laura Svendsen
  {
    id: "lasv21150@sondermark.test.dk",
    personalId: "lasv21150@sondermark.test.dk",
    role: "student",
    coins: 197,
    xp: 151,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_green_outfit"],
    },
  },
  // Frederik Nielsen
  {
    id: "frni84805@sondermark.test.dk",
    personalId: "frni84805@sondermark.test.dk",
    role: "student",
    coins: 17,
    xp: 33,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Maja Sørensen
  {
    id: "maso77322@sondermark.test.dk",
    personalId: "maso77322@sondermark.test.dk",
    role: "student",
    coins: 71,
    xp: 219,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_items_scarf"],
    },
  },
  // Anton Thomsen
  {
    id: "anth17293@sondermark.test.dk",
    personalId: "anth17293@sondermark.test.dk",
    role: "student",
    coins: 96,
    xp: 244,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_clothing_blue_outfit", "cust_hair_afro", "cust_hair_mohawk"],
    },
  },

  // ELEVER i 6.B, Søndermarkskolen
  // Olivia Jakobsen
  {
    id: "olja23340@sondermark.test.dk",
    personalId: "olja23340@sondermark.test.dk",
    role: "student",
    coins: 68,
    xp: 13,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit"],
    },
  },
  // Malthe Schmidt
  {
    id: "masc91962@sondermark.test.dk",
    personalId: "masc91962@sondermark.test.dk",
    role: "student",
    coins: 133,
    xp: 23,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_pink_outfit", "cust_hair_curls", "cust_items_crown"],
    },
  },
  // Josefine Iversen
  {
    id: "joiv86402@sondermark.test.dk",
    personalId: "joiv86402@sondermark.test.dk",
    role: "student",
    coins: 167,
    xp: 273,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_green_outfit", "cust_hair_mohawk", "cust_hair_curls", "cust_items_teddy"],
    },
  },
  // Alfred Hansen
  {
    id: "alha11646@sondermark.test.dk",
    personalId: "alha11646@sondermark.test.dk",
    role: "student",
    coins: 49,
    xp: 257,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit"],
    },
  },
  // Nora Jørgensen
  {
    id: "nojo36143@sondermark.test.dk",
    personalId: "nojo36143@sondermark.test.dk",
    role: "student",
    coins: 198,
    xp: 179,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Valdemar Poulsen
  {
    id: "vapo65151@sondermark.test.dk",
    personalId: "vapo65151@sondermark.test.dk",
    role: "student",
    coins: 112,
    xp: 260,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_mohawk", "cust_hair_bun", "cust_items_umbrella"],
    },
  },
  // Karla Olesen
  {
    id: "kaol82460@sondermark.test.dk",
    personalId: "kaol82460@sondermark.test.dk",
    role: "student",
    coins: 54,
    xp: 66,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_long", "cust_items_sunglasses"],
    },
  },
  // Elias Kristiansen
  {
    id: "elkr10340@sondermark.test.dk",
    personalId: "elkr10340@sondermark.test.dk",
    role: "student",
    coins: 28,
    xp: 13,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_bangs", "cust_hair_ponytail", "cust_items_bow"],
    },
  },
  // Asta Mogensen
  {
    id: "asmo76104@sondermark.test.dk",
    personalId: "asmo76104@sondermark.test.dk",
    role: "student",
    coins: 39,
    xp: 248,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit"],
    },
  },
  // Mathias Andersen
  {
    id: "maan55676@sondermark.test.dk",
    personalId: "maan55676@sondermark.test.dk",
    role: "student",
    coins: 122,
    xp: 124,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_pigtails"],
    },
  },

  // ELEVER i 3.X, Elmelundskolen
  // Signe Madsen
  {
    id: "sima96221@elmelund.test.dk",
    personalId: "sima96221@elmelund.test.dk",
    role: "student",
    coins: 138,
    xp: 59,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_ponytail", "cust_hair_bangs"],
    },
  },
  // August Møller
  {
    id: "aumo77708@elmelund.test.dk",
    personalId: "aumo77708@elmelund.test.dk",
    role: "student",
    coins: 99,
    xp: 120,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit"],
    },
  },
  // Liva Laursen
  {
    id: "lila97713@elmelund.test.dk",
    personalId: "lila97713@elmelund.test.dk",
    role: "student",
    coins: 84,
    xp: 290,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_mohawk", "cust_hair_braids", "cust_items_teddy"],
    },
  },
  // Rasmus Clausen
  {
    id: "racl50989@elmelund.test.dk",
    personalId: "racl50989@elmelund.test.dk",
    role: "student",
    coins: 109,
    xp: 54,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_bangs", "cust_hair_long"],
    },
  },
  // Ellen Winther
  {
    id: "elwi85916@elmelund.test.dk",
    personalId: "elwi85916@elmelund.test.dk",
    role: "student",
    coins: 95,
    xp: 255,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Jonas Larsen
  {
    id: "jola99423@elmelund.test.dk",
    personalId: "jola99423@elmelund.test.dk",
    role: "student",
    coins: 16,
    xp: 60,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit"],
    },
  },
  // Selma Olsen
  {
    id: "seol95712@elmelund.test.dk",
    personalId: "seol95712@elmelund.test.dk",
    role: "student",
    coins: 209,
    xp: 50,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_braids", "cust_hair_bun"],
    },
  },
  // Villads Knudsen
  {
    id: "vikn92718@elmelund.test.dk",
    personalId: "vikn92718@elmelund.test.dk",
    role: "student",
    coins: 194,
    xp: 137,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_items_scarf"],
    },
  },
  // Mille Lund
  {
    id: "milu95515@elmelund.test.dk",
    personalId: "milu95515@elmelund.test.dk",
    role: "student",
    coins: 133,
    xp: 246,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_items_round_glasses"],
    },
  },
  // Tobias Andreasen
  {
    id: "toan18148@elmelund.test.dk",
    personalId: "toan18148@elmelund.test.dk",
    role: "student",
    coins: 105,
    xp: 90,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_items_teddy"],
    },
  },

  // ELEVER i 4.Y, Elmelundskolen
  // Emma Hansen
  {
    id: "emha58138@elmelund.test.dk",
    personalId: "emha58138@elmelund.test.dk",
    role: "student",
    coins: 46,
    xp: 125,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_afro", "cust_items_crown"],
    },
  },
  // Noah Jørgensen
  {
    id: "nojo84519@elmelund.test.dk",
    personalId: "nojo84519@elmelund.test.dk",
    role: "student",
    coins: 170,
    xp: 100,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_items_sunglasses"],
    },
  },
  // Ida Poulsen
  {
    id: "idpo63305@elmelund.test.dk",
    personalId: "idpo63305@elmelund.test.dk",
    role: "student",
    coins: 86,
    xp: 236,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_items_sunglasses"],
    },
  },
  // William Olesen
  {
    id: "wiol18052@elmelund.test.dk",
    personalId: "wiol18052@elmelund.test.dk",
    role: "student",
    coins: 71,
    xp: 47,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_items_teddy"],
    },
  },
  // Freja Kristiansen
  {
    id: "frkr20926@elmelund.test.dk",
    personalId: "frkr20926@elmelund.test.dk",
    role: "student",
    coins: 220,
    xp: 278,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_bun", "cust_hair_bangs"],
    },
  },
  // Oscar Mogensen
  {
    id: "osmo51345@elmelund.test.dk",
    personalId: "osmo51345@elmelund.test.dk",
    role: "student",
    coins: 120,
    xp: 102,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_items_round_glasses"],
    },
  },
  // Alma Andersen
  {
    id: "alan59860@elmelund.test.dk",
    personalId: "alan59860@elmelund.test.dk",
    role: "student",
    coins: 42,
    xp: 117,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_pigtails", "cust_hair_afro"],
    },
  },
  // Lucas Madsen
  {
    id: "luma83601@elmelund.test.dk",
    personalId: "luma83601@elmelund.test.dk",
    role: "student",
    coins: 204,
    xp: 94,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_bangs", "cust_hair_long"],
    },
  },
  // Clara Møller
  {
    id: "clmo56072@elmelund.test.dk",
    personalId: "clmo56072@elmelund.test.dk",
    role: "student",
    coins: 143,
    xp: 106,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_braids"],
    },
  },
  // Victor Laursen
  {
    id: "vila62558@elmelund.test.dk",
    personalId: "vila62558@elmelund.test.dk",
    role: "student",
    coins: 24,
    xp: 17,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_bun"],
    },
  },

  // ELEVER i 4.Z, Elmelundskolen
  // Ella Clausen
  {
    id: "elcl85080@elmelund.test.dk",
    personalId: "elcl85080@elmelund.test.dk",
    role: "student",
    coins: 65,
    xp: 127,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_pigtails", "cust_items_headphones"],
    },
  },
  // Emil Winther
  {
    id: "emwi93835@elmelund.test.dk",
    personalId: "emwi93835@elmelund.test.dk",
    role: "student",
    coins: 146,
    xp: 218,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_green_outfit"],
    },
  },
  // Sofie Larsen
  {
    id: "sola70110@elmelund.test.dk",
    personalId: "sola70110@elmelund.test.dk",
    role: "student",
    coins: 122,
    xp: 22,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_clothing_space_outfit", "cust_items_umbrella"],
    },
  },
  // Magnus Olsen
  {
    id: "maol76837@elmelund.test.dk",
    personalId: "maol76837@elmelund.test.dk",
    role: "student",
    coins: 186,
    xp: 111,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit"],
    },
  },
  // Agnes Knudsen
  {
    id: "agkn35267@elmelund.test.dk",
    personalId: "agkn35267@elmelund.test.dk",
    role: "student",
    coins: 172,
    xp: 21,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_clothing_space_outfit", "cust_hair_pigtails"],
    },
  },
  // Mikkel Lund
  {
    id: "milu59385@elmelund.test.dk",
    personalId: "milu59385@elmelund.test.dk",
    role: "student",
    coins: 183,
    xp: 165,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit"],
    },
  },
  // Laura Andreasen
  {
    id: "laan38415@elmelund.test.dk",
    personalId: "laan38415@elmelund.test.dk",
    role: "student",
    coins: 205,
    xp: 43,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_items_bow"],
    },
  },
  // Frederik Jensen
  {
    id: "frje19234@elmelund.test.dk",
    personalId: "frje19234@elmelund.test.dk",
    role: "student",
    coins: 24,
    xp: 130,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_pink_outfit", "cust_hair_braids", "cust_items_backpack"],
    },
  },
  // Maja Rasmussen
  {
    id: "mara69231@elmelund.test.dk",
    personalId: "mara69231@elmelund.test.dk",
    role: "student",
    coins: 174,
    xp: 170,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_items_cap"],
    },
  },
  // Anton Christiansen
  {
    id: "anch61408@elmelund.test.dk",
    personalId: "anch61408@elmelund.test.dk",
    role: "student",
    coins: 198,
    xp: 280,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_mohawk", "cust_items_teddy"],
    },
  },

  // ELEVER i 5.Y, Elmelundskolen
  // Signe Kristensen
  {
    id: "sikr83507@elmelund.test.dk",
    personalId: "sikr83507@elmelund.test.dk",
    role: "student",
    coins: 74,
    xp: 65,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_clothing_space_outfit", "cust_hair_braids", "cust_items_cap"],
    },
  },
  // August Mortensen
  {
    id: "aumo15677@elmelund.test.dk",
    personalId: "aumo15677@elmelund.test.dk",
    role: "student",
    coins: 68,
    xp: 243,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_bangs", "cust_items_umbrella"],
    },
  },
  // Liva Henriksen
  {
    id: "lihe69114@elmelund.test.dk",
    personalId: "lihe69114@elmelund.test.dk",
    role: "student",
    coins: 202,
    xp: 270,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_pink_outfit", "cust_items_headphones"],
    },
  },
  // Rasmus Svendsen
  {
    id: "rasv16866@elmelund.test.dk",
    personalId: "rasv16866@elmelund.test.dk",
    role: "student",
    coins: 172,
    xp: 272,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_bangs", "cust_items_teddy"],
    },
  },
  // Ellen Nielsen
  {
    id: "elni27161@elmelund.test.dk",
    personalId: "elni27161@elmelund.test.dk",
    role: "student",
    coins: 188,
    xp: 248,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bamse",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_mohawk", "cust_items_umbrella"],
    },
  },
  // Jonas Sørensen
  {
    id: "joso95676@elmelund.test.dk",
    personalId: "joso95676@elmelund.test.dk",
    role: "student",
    coins: 134,
    xp: 177,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_clothing_green_outfit", "cust_hair_long", "cust_items_cap"],
    },
  },
  // Selma Thomsen
  {
    id: "seth33527@elmelund.test.dk",
    personalId: "seth33527@elmelund.test.dk",
    role: "student",
    coins: 169,
    xp: 96,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_items_headphones"],
    },
  },
  // Villads Jakobsen
  {
    id: "vija26445@elmelund.test.dk",
    personalId: "vija26445@elmelund.test.dk",
    role: "student",
    coins: 162,
    xp: 233,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Pip",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_mohawk"],
    },
  },
  // Mille Schmidt
  {
    id: "misc45528@elmelund.test.dk",
    personalId: "misc45528@elmelund.test.dk",
    role: "student",
    coins: 35,
    xp: 102,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_clothing_space_outfit", "cust_items_round_glasses"],
    },
  },
  // Tobias Iversen
  {
    id: "toiv75319@elmelund.test.dk",
    personalId: "toiv75319@elmelund.test.dk",
    role: "student",
    coins: 32,
    xp: 89,
    unlockedAchievementIds: ["firstLanding", "collector"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_braids", "cust_hair_pigtails", "cust_items_backpack"],
    },
  },

  // ELEVER i 6.X, Elmelundskolen
  // Emma Pedersen
  {
    id: "empe10427@elmelund.test.dk",
    personalId: "empe10427@elmelund.test.dk",
    role: "student",
    coins: 90,
    xp: 162,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_items_scarf"],
    },
  },
  // Noah Petersen
  {
    id: "nope45033@elmelund.test.dk",
    personalId: "nope45033@elmelund.test.dk",
    role: "student",
    coins: 195,
    xp: 96,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "syren",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit"],
    },
  },
  // Ida Johansen
  {
    id: "idjo64317@elmelund.test.dk",
    personalId: "idjo64317@elmelund.test.dk",
    role: "student",
    coins: 213,
    xp: 16,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_bangs", "cust_hair_spikes", "cust_items_umbrella"],
    },
  },
  // William Frederiksen
  {
    id: "wifr12160@elmelund.test.dk",
    personalId: "wifr12160@elmelund.test.dk",
    role: "student",
    coins: 66,
    xp: 92,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Freja Simonsen
  {
    id: "frsi16323@elmelund.test.dk",
    personalId: "frsi16323@elmelund.test.dk",
    role: "student",
    coins: 158,
    xp: 69,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_bun"],
    },
  },
  // Oscar Bruun
  {
    id: "osbr68027@elmelund.test.dk",
    personalId: "osbr68027@elmelund.test.dk",
    role: "student",
    coins: 120,
    xp: 67,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Gnist",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_clothing_space_outfit", "cust_hair_bangs", "cust_hair_curls", "cust_items_bow"],
    },
  },
  // Alma Christensen
  {
    id: "alch57764@elmelund.test.dk",
    personalId: "alch57764@elmelund.test.dk",
    role: "student",
    coins: 129,
    xp: 180,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_space_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_pigtails"],
    },
  },
  // Lucas Kristensen
  {
    id: "lukr51487@elmelund.test.dk",
    personalId: "lukr51487@elmelund.test.dk",
    role: "student",
    coins: 141,
    xp: 250,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Mynte",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_items_round_glasses"],
    },
  },
  // Clara Mortensen
  {
    id: "clmo49513@elmelund.test.dk",
    personalId: "clmo49513@elmelund.test.dk",
    role: "student",
    coins: 149,
    xp: 192,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit", "cust_hair_bangs", "cust_hair_spikes", "cust_items_cap"],
    },
  },
  // Victor Henriksen
  {
    id: "vihe56689@elmelund.test.dk",
    personalId: "vihe56689@elmelund.test.dk",
    role: "student",
    coins: 124,
    xp: 56,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Tøffe",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_hair_braids"],
    },
  },

  // ELEVER i 6.Z, Elmelundskolen
  // Ella Svendsen
  {
    id: "elsv41097@elmelund.test.dk",
    personalId: "elsv41097@elmelund.test.dk",
    role: "student",
    coins: 87,
    xp: 133,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Fnug",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_pink_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_pink_outfit"],
    },
  },
  // Emil Nielsen
  {
    id: "emni19894@elmelund.test.dk",
    personalId: "emni19894@elmelund.test.dk",
    role: "student",
    coins: 145,
    xp: 113,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Kiks",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_curls", "cust_hair_pigtails", "cust_items_cap"],
    },
  },
  // Sofie Sørensen
  {
    id: "soso98337@elmelund.test.dk",
    personalId: "soso98337@elmelund.test.dk",
    role: "student",
    coins: 17,
    xp: 55,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_green_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_green_outfit", "cust_hair_braids"],
    },
  },
  // Magnus Thomsen
  {
    id: "math71174@elmelund.test.dk",
    personalId: "math71174@elmelund.test.dk",
    role: "student",
    coins: 211,
    xp: 102,
    unlockedAchievementIds: ["firstLanding", "stylist", "collector"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_blue_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_blue_outfit", "cust_hair_bun", "cust_hair_pigtails", "cust_items_crown"],
    },
  },
  // Agnes Jakobsen
  {
    id: "agja31250@elmelund.test.dk",
    personalId: "agja31250@elmelund.test.dk",
    role: "student",
    coins: 99,
    xp: 119,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "mint",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_braids"],
    },
  },
  // Mikkel Schmidt
  {
    id: "misc74710@elmelund.test.dk",
    personalId: "misc74710@elmelund.test.dk",
    role: "student",
    coins: 92,
    xp: 220,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bobbel",
      skinColor: "citron",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_clothing_blue_outfit"],
    },
  },
  // Laura Iversen
  {
    id: "laiv63620@elmelund.test.dk",
    personalId: "laiv63620@elmelund.test.dk",
    role: "student",
    coins: 112,
    xp: 237,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Stjerne",
      skinColor: "himmel",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_clothing_space_outfit", "cust_clothing_green_outfit", "cust_hair_ponytail", "cust_items_backpack"],
    },
  },
  // Frederik Hansen
  {
    id: "frha94336@elmelund.test.dk",
    personalId: "frha94336@elmelund.test.dk",
    role: "student",
    coins: 148,
    xp: 247,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Bjørn",
      skinColor: "fersken",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_pigtails", "cust_items_scarf"],
    },
  },
  // Maja Jørgensen
  {
    id: "majo84084@elmelund.test.dk",
    personalId: "majo84084@elmelund.test.dk",
    role: "student",
    coins: 63,
    xp: 228,
    unlockedAchievementIds: ["firstLanding"],
    kosmo: {
      kosmoName: "Sprut",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit"],
    },
  },
  // Anton Poulsen
  {
    id: "anpo91989@elmelund.test.dk",
    personalId: "anpo91989@elmelund.test.dk",
    role: "student",
    coins: 43,
    xp: 155,
    unlockedAchievementIds: ["firstLanding", "stylist"],
    kosmo: {
      kosmoName: "Luna",
      skinColor: "rosa",
      equippedClothing: { clothing: "cust_clothing_yellow_outfit" },
      unlockedClothingIds: ["cust_clothing_yellow_outfit", "cust_hair_bun", "cust_items_umbrella"],
    },
  },
];
