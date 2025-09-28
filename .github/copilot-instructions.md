# AI Assistant Instructions for Greasy Pole

This is a browser-based game where players must solve letter sequences while racing against rising water. Below are key aspects to understand when working with this codebase.

## Project Structure

- Single-page application with vanilla JavaScript
- Key files:
  - `index.html`: Contains both game logic and UI structure
  - `styles.css`: Game styling and animations
  - No build process or dependencies (except Google Fonts)

## Core Game Components

### Canvas-based Rendering

- Main game visuals use HTML5 Canvas (`liquidCanvas`)
- Dynamic water animation with sine waves
- House structure drawn using basic shapes
- Handles high-DPI displays with device pixel ratio scaling

### Game Mechanics

- Players must match letter sequences before water rises too high
- Difficulty increases with more buttons each round (3 to 9 buttons)
- Core state variables:
  ```javascript
  let buttons = []; // Current button set
  let targetSequence = []; // Sequence player needs to match
  let userSequence = []; // Player's current progress
  ```

### UI Elements

- Button grid with dynamic sizing based on button count
- Flash messages for game status
- Responsive layout with gradient background
- Custom font: "Rubik Moonrocks"

## Important Patterns

### Water Physics

- Water level controlled by `baseY` (current) and `destY` (target)
- Rises continuously at `riseSpeed` (scaled to canvas height)
- Correct/wrong answers affect water level:
  ```javascript
  WRONG_PX = Math.round((BUTTON_COUNT * 2) / 3); // Water rises
  CORRECT_PX = WRONG_PX * 2; // Water lowers
  COMPLETE_PX = BUTTON_COUNT * 10; // Round completion bonus
  ```

### Game Flow

1. `newGame()`: Initializes game state
2. `newRound()`: Sets up each level with increasing buttons
3. `handleClick()`: Processes player input and updates water level
4. `draw()`: Main animation loop for water and house rendering

## Style Guide

- CSS uses custom properties for colors
- Button interactions use transitions for smooth feedback
- Water animation parameters tuned for smooth movement
