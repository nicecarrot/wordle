const LOGO: string = "Wordle";

const KEYBOARD_TOP: string[] = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
];

const KEYBOARD_MID: string[] = [
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
];

const KEYBOARD_BOT: string[] = [
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "\u232b",
];

const KEYS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type BoxStatus = "absent" | "present" | "correct" | "empty" | "edit";

type GameStatus = "Victory" | "Defeat" | "Playing";

const COMPLETE_WORD: string[] = [];

const CHANCE: number = 6;

const API: string = "https://random-word-api.herokuapp.com";

const LENGTH: number = 5;

const API_KEY: string = "a545c7ed6cmshfc19ba1098f7b67p1a5cc0jsn442a582de082";

export { LOGO, KEYBOARD_TOP, KEYBOARD_MID, KEYBOARD_BOT, KEYS, COMPLETE_WORD, CHANCE, API, LENGTH, API_KEY };
export type { BoxStatus, GameStatus };
