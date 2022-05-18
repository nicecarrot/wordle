/* 헤더 영역에 쓸 상수를 적는다 
    상수니까 다 대문자로 쓰는게 좋다.
*/
export const MENUBAR: string = "MENUBAR";
export const LOGO: string = "Wordle";
export const SETTING: string = "SETTING";

export const KEYBOARD_TOP: string[] = [
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

export const KEYBOARD_MID: string[] = [
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

export const KEYBOARD_BOT: string[] = [
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

export const KEYS: string[] = [
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

export type BoxStatus = "absent" | "present" | "correct" | "empty" | "edit";

export type GameStatus = "Victory" | "Defeat" | "Playing";

export const COMPLETE_WORD: string[] = [];

export const CHANCE: number = 6;
