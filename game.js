// Pocket Mortys Game (Console Version)

// Utility Functions
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Morty Class: Represents a Morty with attributes like name, level, and HP.
 */
class Morty {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.maxHP = level * 10; // Max HP based on level
        this.currentHP = this.maxHP; // Current HP starts full
    }

    // Method to reduce HP when attacked
    takeDamage(amount) {
        this.currentHP = Math.max(0, this.currentHP - amount);
    }

    // Method to check if Morty is fainted
    isFainted() {
        return this.currentHP <= 0;
    }
}

/**
 * Rick Class: Represents Rick, who owns and battles with Mortys.
 */
class Rick {
    constructor(name) {
        this.name = name;
        this.mortys = []; // Rick starts with an empty roster of Mortys
    }

    // Add a Morty to Rick's collection
    addMorty(morty) {
        this.mortys.push(morty);
    }

    // Check if Rick has any Mortys left to battle
    hasMortysLeft() {
        return this.mortys.some(morty => !morty.isFainted());
    }

    // Choose a Morty for battle
    chooseMorty() {
        return this.mortys.find(morty => !morty.isFainted());
    }
}

/**
 * Battle Function: Handles combat between two Mortys.
 * @param {Morty} playerMorty - Player's Morty
 * @param {Morty} opponentMorty - Opponent's Morty
 */
function battle(playerMorty, opponentMorty) {
    console.log(`\nBattle Start: ${playerMorty.name} vs ${opponentMorty.name}`);
    while (!playerMorty.isFainted() && !opponentMorty.isFainted()) {
        const playerAttack = getRandomInt(5, 10);
        const opponentAttack = getRandomInt(5, 10);

        opponentMorty.takeDamage(playerAttack);
        console.log(`${playerMorty.name} attacks for ${playerAttack} damage!`);
        if (opponentMorty.isFainted()) {
            console.log(`${opponentMorty.name} fainted!`);
            return "win";
        }

        playerMorty.takeDamage(opponentAttack);
        console.log(`${opponentMorty.name} attacks for ${opponentAttack} damage!`);
        if (playerMorty.isFainted()) {
            console.log(`${playerMorty.name} fainted!`);
            return "lose";
        }
    }
}

/**
 * Main Game Function: Runs the entire game loop.
 */
function startGame() {
    console.log("Welcome to Pocket Mortys Console Game!");

    // Create player Rick
    const playerRick = new Rick("Player Rick");
    playerRick.addMorty(new Morty("Scruffy Morty", 5));
    playerRick.addMorty(new Morty("Buff Morty", 8));

    // Create opponent Rick with Mortys
    const opponentRick = new Rick("Opponent Rick");
    opponentRick.addMorty(new Morty("Sneaky Morty", 6));
    opponentRick.addMorty(new Morty("Strong Morty", 10));

    // Game loop: Player battles each opponent Morty
    for (const opponentMorty of opponentRick.mortys) {
        const playerMorty = playerRick.chooseMorty();
        if (!playerMorty) {
            console.log("All your Mortys have fainted. Game Over!");
            return;
        }

        console.log(`\nOpponent sends out ${opponentMorty.name}!`);
        const result = battle(playerMorty, opponentMorty);
        if (result === "lose") {
            console.log(`You lost this battle!`);
        } else {
            console.log(`You captured ${opponentMorty.name}!`);
            playerRick.addMorty(opponentMorty);
        }
    }

    console.log("\nCongratulations! You defeated all opponent Mortys!");
}

// Start the game
startGame();
