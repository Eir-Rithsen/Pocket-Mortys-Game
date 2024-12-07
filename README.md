# Pocket Mortys Console Game

Welcome to the console-based version of the **Pocket Mortys** game! This simplified version is designed to run in the console (Node.js or browser dev tools) and mimics a turn-based RPG battle system.

---

## Game Logic and Approach

### 1. **Game Structure**
- The game revolves around turn-based battles between Mortys.
- Each player is represented by a "Rick," who has a collection of Mortys with unique attributes:
  - **Name**: The Morty's identity.
  - **Level**: Determines the Morty's strength.
  - **HP (Health Points)**: Indicates how much damage the Morty can take.

### 2. **Main Components**
#### Classes:
1. **`Morty`**:
   - Represents an individual Morty.
   - Handles HP reduction and fainting logic.
2. **`Rick`**:
   - Represents a Rick who owns Mortys.
   - Manages Morty selection and collection.

#### Functions:
- **Battle Function**: Facilitates combat between two Mortys, using random damage values.
- **Game Loop**: Simulates battles between the player's and opponent's Mortys in sequence.

### 3. **Gameplay Flow**
1. The player starts with a roster of Mortys.
2. The player battles Mortys owned by the opponent Rick.
3. The player wins by capturing all opponent Mortys or loses if all their Mortys faint.

---

## How to Run the Game

### Prerequisites
- Ensure you have **Node.js** installed or access to browser developer tools.

### Steps:
1. Copy the `game.js` file into your project directory.
2. Run the game using Node.js:
   ```bash
   node game.js
