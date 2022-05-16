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

export type BoxStatus = "absent" | "present" | "correct" | "empty";