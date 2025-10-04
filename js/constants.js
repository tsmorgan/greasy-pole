export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Game settings
export let BUTTON_COUNT = 1;
export let WRONG_PX;
export let CORRECT_PX;
export let COMPLETE_PX;
export let BASE_SPEED_FACTOR = 40; // Slower initial speed for better learning curve

// Time estimates (in seconds) for completing each level
const ESTIMATED_LEVEL_TIMES = {
  1: 3, // 3 buttons: ~3 seconds
  2: 4, // 4 buttons: ~4 seconds
  3: 6, // 5 buttons: ~6 seconds
  4: 8, // 6 buttons: ~8 seconds
  5: 11, // 7 buttons: ~11 seconds
  6: 15, // 8 buttons: ~15 seconds
  7: 20, // 9 buttons: ~20 seconds
};

// Canvas settings
export const BOX_WIDTH = 50;

// Calculate speed factor based on current level
export function getSpeedFactor(buttonCount) {
  const level = buttonCount - 2; // Convert button count to level (3 buttons = level 1)
  if (level <= 0) return BASE_SPEED_FACTOR;

  const estimatedTime = ESTIMATED_LEVEL_TIMES[level] || 20;
  // Adjust speed factor based on estimated completion time
  return BASE_SPEED_FACTOR * (estimatedTime / ESTIMATED_LEVEL_TIMES[1]);
}

export function updatePixelConstants(buttonCount) {
  BUTTON_COUNT = buttonCount;

  // Progressive difficulty adjustments
  const difficultyFactor = Math.pow(1.2, buttonCount - 3); // Exponential scaling

  // Wrong moves are more punishing in later levels
  WRONG_PX = Math.round(((buttonCount * 2) / 3) * difficultyFactor);

  // Correct moves give slightly more reward in later levels
  CORRECT_PX = Math.round(WRONG_PX * 1.2);

  // Completion bonus scales with difficulty
  COMPLETE_PX = Math.round(buttonCount * 10 * difficultyFactor);
}

updatePixelConstants(BUTTON_COUNT);
