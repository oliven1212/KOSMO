// data/users.ts – users for lærere og for elever i klasser med isActive = true (statiske data)
// No document ID here: the seeder creates an Auth user for each personalId (e-mail) and uses its uid as document ID
// Lærere har kun personalId og role. Elever har også coins, xp, achievements og kosmo
// Elever der ikke har købt tøj har standardoutfittet (gul hoodie, uden pris) på. Det tæller ikke som oplåst/købt
import type { UserSeed } from "../types"; // importér typen

export const users: UserSeed[] = [
  // LÆRERE
  { personalId: "mekj69255@sondermark.test.dk", role: "teacher" }, // Mette Kjær
  { personalId: "soba54617@sondermark.test.dk", role: "teacher" }, // Søren Bak
  { personalId: "liho91386@sondermark.test.dk", role: "teacher" }, // Lise Holm
  { personalId: "peve88912@sondermark.test.dk", role: "teacher" }, // Peter Vester
  { personalId: "cani68542@elmelund.test.dk", role: "teacher" }, // Camilla Nielsen
  { personalId: "thda77877@elmelund.test.dk", role: "teacher" }, // Thomas Dalgaard
  { personalId: "habr64562@elmelund.test.dk", role: "teacher" }, // Hanne Brandt
  { personalId: "kejo79061@elmelund.test.dk", role: "teacher" }, // Kenny Jordsen
  { personalId: "risa99971@elmelund.test.dk", role: "teacher" }, // Rikke Sandberg

  // ELEVER i 3.A, Søndermarkskolen
  // Emma Nielsen
  {
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
