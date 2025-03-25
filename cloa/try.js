// Game data (array of dialogues)
const dialogues = [
    {
        character: "jake.jpg", // Optional image
        dialogue: "The Holloway family mysteriously vanished one night, leaving behind a perfectly preserved home… untouched, as if they simply disappeared into thin air."
    },
    {
        character: "bobby.jpg", // Optional image
        dialogue: "That’s weird. No bodies, no clues?"
    },
    {
        character: "jake.jpg", // Optional image
        dialogue: "Some say they left. Others believe they were cursed by the land itself."
    },
    {
        character: "bobby.jpg", // Optional image
        dialogue: "Cursed?"
    },
    {
        character: "jake.jpg", // Optional image
        dialogue: "Yeah! The book says an old spirit, some woman named Margaret Hale, used to live there. She lost her family and, before she died, cursed the land so no one else could be happy there. When the Holloways moved in, she got jealous and—poof!—they were gone."
    },
    {
        character: "bobby.jpg", // Optional image
        dialogue: "That’s just a story."
    },
    {
        character: "jake.jpg", // Optional image
        dialogue: "Maybe. But no one who’s gone in at night has ever stayed long. They say the house wants to keep you."
    },
    {
        character: "bobby.jpg", // Optional image
        dialogue: "You know… I bet it’s just an old house with a creepy history. I could prove it."
    },
    {
        character: "jake.jpg", // Optional image
        dialogue: "No way. You wouldn’t dare"
    },
    {
        character: "bobby.jpg", // Optional image
        dialogue: "Watch me."
    }
];

// Initialize game variables
let currentDialogue = 0;

// Function to update the game screen with the current dialogue
function updateGameScreen(dialogueIndex) {
    const dialogue = dialogues[dialogueIndex];
    
    // Update character image
    document.getElementById("character").style.backgroundImage = `url(${dialogue.character})`;
    
    // Update dialogue
    document.getElementById("dialogue").textContent = dialogue.dialogue;
    
    // Hide "Next" button on last dialogue
    if (dialogueIndex === dialogues.length - 1) {
        document.querySelector('.next-btn').style.display = 'none';
    }
}

// Handle "Next" button click
function nextDialogue() {
    // Move to the next dialogue
    currentDialogue++;
    
    if (currentDialogue < dialogues.length) {
        updateGameScreen(currentDialogue);
    }
}

// Initialize the game by showing the first dialogue
updateGameScreen(currentDialogue);
