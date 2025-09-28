export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Game settings
export let BUTTON_COUNT = 1;
export let WRONG_PX;
export let CORRECT_PX;
export let COMPLETE_PX;

// Canvas settings
export const BOX_WIDTH = 50;

export function updatePixelConstants(buttonCount) {
  BUTTON_COUNT = buttonCount;
  WRONG_PX = Math.round((BUTTON_COUNT * 2) / 3);
  CORRECT_PX = WRONG_PX;
  COMPLETE_PX = BUTTON_COUNT * 10;
}

updatePixelConstants(BUTTON_COUNT);
