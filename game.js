class Card {
    constructor(name, aura, skill, stamina, imagePaths) {
        this.name = name;
        this.aura = aura;
        this.skill = skill;
        this.stamina = stamina;
        this.imagePaths = imagePaths; // Object containing paths for each rarity
        this.rarity = "base";
    }

    get totalScore() {
        let multiplier = 1;
        switch (this.rarity) {
            case "rare": multiplier = 1.25; break;
            case "veryRare": multiplier = 1.5; break;
            case "epic": multiplier = 2; break;
            case "spectacular": multiplier = 3; break;
        }
        return Math.round((this.aura + this.skill + this.stamina) * multiplier);
    }

    getCardElement() {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Check if imagePath for the current rarity is defined
        if (this.imagePaths[this.rarity]) {
            const imgElement = document.createElement('img');
            imgElement.src = this.imagePaths[this.rarity];
            imgElement.alt = this.name;
            cardElement.appendChild(imgElement);
        } else {
            // Display text when image is not available
            const textElement = document.createElement('div');
            textElement.textContent = `${this.name} - Rarity: ${this.rarity}`;
            cardElement.appendChild(textElement);

            // Additional text for rares
            if (['rare', 'veryRare', 'epic', 'spectacular'].includes(this.rarity)) {
                const comingSoonText = document.createElement('div');
                comingSoonText.textContent = 'Image Coming Soon';
                cardElement.appendChild(comingSoonText);
            }
        }

        return cardElement;
    }
}


function createPredefinedDeck() {
    const predefinedCards = [
        new Card("Versitile Viking", 25, 24, 24, {
            'base': "images/viking.png",
            'rare': "images/viking_rare.png",
            'veryRare': "images/viking_veryRare.png",
            'epic': "images/viking_epic.png",
            'spectacular': "images/viking_spectacular.png"
        }),
        new Card("Amiable Anchovy", 20, 19, 13, {
            'base': "images/anchovy.png",
            'rare': "images/anchovy_rare.png",
            'veryRare': "images/anchovy_veryRare.png",
            'epic': "images/anchovy_epic.png",
            'spectacular': "images/anchovy_spectacular.png"
        }),
        new Card("Corteous Coyote", 18, 17, 17, {
            'base': "images/coyote.png",
            'rare': "images/coyote_rare.png",
            'veryRare': "images/coyote_veryRare.png",
            'epic': "images/coyote_epic.png",
            'spectacular': "images/coyote_spectacular.png"
        }),
        new Card("Selfless Sloth", 20, 21, 18, {
            'base': "images/sloth.png",
            'rare': "images/sloth_rare.png",
            'veryRare': "images/sloth_veryRare.png",
            'epic': "images/sloth_epic.png",
            'spectacular': "images/sloth_spectacular.png"
        }),
        new Card("Mojo Mouse", 16, 21, 13, {
            'base': "images/mouse.png",
            'rare': "images/mouse_rare.png",
            'veryRare': "images/mouse_veryRare.png",
            'epic': "images/mouse_epic.png",
            'spectacular': "images/mouse_spectacular.png"
        }),
        new Card("Big Game Bandicoot", 20, 22, 21, {
            'base': "images/biggame.png",
            'rare': "images/biggame_rare.png",
            'veryRare': "images/biggame_veryRare.png",
            'epic': "images/biggame_epic.png",
            'spectacular': "images/biggame_spectacular.png"
        }),
        new Card("Genuine Giraffe", 24, 22, 23, {
            'base': "images/giraffe.png",
            'rare': "images/giraffe_rare.png",
            'veryRare': "images/giraffe_veryRare.png",
            'epic': "images/giraffe_epic.png",
            'spectacular': "images/giraffe_spectacular.png"
        }),
        new Card("Gary Bee", 23, 22, 21, {
            'base': "images/garybee.png",
            'rare': "images/garybee_rare.png",
            'veryRare': "images/garybee_veryRare.png",
            'epic': "images/garybee_epic.png",
            'spectacular': "images/garybee_spectacular.png"
        }),
        new Card("Honest Honey Bee", 17, 14, 21, {
            'base': "images/hhb.png",
            'rare': "images/hhb_rare.png",
            'veryRare': "images/hhb_veryRare.png",
            'epic': "images/hhb_epic.png",
            'spectacular': "images/hhb_spectacular.png"
        }),
        new Card("Perfect Persian Cat", 25, 25, 25, {
            'base': "images/ppc.png",
            'rare': "images/ppc_rare.png",
            'veryRare': "images/ppc_veryRare.png",
            'epic': "images/ppc_epic.png",
            'spectacular': "images/ppc_spectacular.png"
        }),
        new Card("Gift Goat", 25, 24, 25, {
            'base': "images/giftgoat.png",
            'rare': "images/giftgoat_rare.png",
            'veryRare': "images/giftgoat_veryRare.png",
            'epic': "images/giftgoat_epic.png",
            'spectacular': "images/giftgoat_spectacular.png"
        }),
        new Card("Accountable Ant", 25, 23, 24, {
            'base': "images/ant.png",
            'rare': "images/ant_rare.png",
            'veryRare': "images/ant_veryRare.png",
            'epic': "images/ant_epic.png",
            'spectacular': "images/ant_spectacular.png"
        }),
        new Card("Proactive Piranha", 19, 18, 22, {
            'base': "images/piranha.png",
            'rare': "images/piranha_rare.png",
            'veryRare': "images/piranha_veryRare.png",
            'epic': "images/piranha_epic.png",
            'spectacular': "images/piranha_spectacular.png"
        }),
        new Card("Chill Chinchilla", 19, 20, 21, {
            'base': "images/chinchilla.png",
            'rare': "images/chinchilla_rare.png",
            'veryRare': "images/chinchilla_veryRare.png",
            'epic': "images/chinchilla_epic.png",
            'spectacular': "images/chinchilla_spectacular.png"
        }),
        new Card("Determined Dolphin", 21, 24, 24, {
            'base': "images/dolphin.png",
            'rare': "images/dolphin_rare.png",
            'veryRare': "images/dolphin_veryRare.png",
            'epic': "images/dolphin_epic.png",
            'spectacular': "images/dolphin_spectacular.png"
        }),
        new Card("Generous Gerbil", 19, 20, 21, {
            'base': "images/gerbil.png",
            'rare': "images/gerbil_rare.png",
            'veryRare': "images/gerbil_veryRare.png",
            'epic': "images/gerbil_epic.png",
            'spectacular': "images/gerbil_spectacular.png"
        }),
        new Card("Innovative Impala", 21, 22, 22, {
            'base': "images/impala.png",
            'rare': "images/impala_rare.png",
            'veryRare': "images/impala_veryRare.png",
            'epic': "images/impala_epic.png",
            'spectacular': "images/impala_spectacular.png"
        }),
        new Card("Content Condor", 20, 22, 22, {
            'base': "images/condor.png",
            'rare': "images/condor_rare.png",
            'veryRare': "images/condor_veryRare.png",
            'epic': "images/condor_epic.png",
            'spectacular': "images/condor_spectacular.png"
        }),
        new Card("Willful Wizard", 23, 22, 22, {
            'base': "images/wizard.png",
            'rare': "images/wizard_rare.png",
            'veryRare': "images/wizard_veryRare.png",
            'epic': "images/wizard_epic.png",
            'spectacular': "images/wizard_spectacular.png"
        }),
        new Card("Five Five Five Fan", 23, 23, 24, {
            'base': "images/fivefan.png",
            'rare': "images/fivefan_rare.png",
            'veryRare': "images/fivefan_veryRare.png",
            'epic': "images/fivefan_epic.png",
            'spectacular': "images/fivefan_spectacular.png"
        }),
        new Card("Well Connected Werewolf", 22, 21, 20, {
            'base': "images/werewolf.png",
            'rare': "images/werewolf_rare.png",
            'veryRare': "images/werewolf_veryRare.png",
            'epic': "images/werewolf_epic.png",
            'spectacular': "images/werewolf_spectacular.png"
        }),
        new Card("Tenacious Turkey", 15, 20, 18, {
            'base': "images/turkey.png",
            'rare': "images/turkey_rare.png",
            'veryRare': "images/turkey_veryRare.png",
            'epic': "images/turkey_epic.png",
            'spectacular': "images/turkey_spectacular.png"
        }),
        new Card("Confident Cobra", 23, 21, 23, {
            'base': "images/cobra.png",
            'rare': "images/cobra_rare.png",
            'veryRare': "images/cobra_veryRare.png",
            'epic': "images/cobra_epic.png",
            'spectacular': "images/cobra_spectacular.png"
        }),
        new Card("Notorious Ninja", 24, 25, 22, {
            'base': "images/ninja.png",
            'rare': "images/ninja_rare.png",
            'veryRare': "images/ninja_veryRare.png",
            'epic': "images/ninja_epic.png",
            'spectacular': "images/ninja_spectacular.png"
        }),

        // ... (continue adding any remaining cards) ...
        // ... Continue with the rest of the cards in a similar fashion ...
    ];

    // Assign rarities to approximately 25% of the cards
    predefinedCards.forEach(card => {
        if (Math.random() < 0.00) {
            const rarities = ["rare", "veryRare", "epic", "spectacular"];
            card.rarity = rarities[Math.floor(Math.random() * rarities.length)];
        }
    });

    return predefinedCards.sort(() => Math.random() - 0.5).slice(0, 20);
}


function createDeck() {
    let deck = [];
    for (let i = 0; i < 20; i++) {
        deck.push(new Card(randomValue(), randomValue(), randomValue()));
    }
    return deck;
}

function randomValue() {
    return Math.floor(Math.random() * (25 - 15 + 1)) + 15;
}

let player1Deck = createPredefinedDeck();
let player2Deck = createPredefinedDeck();



let roundCount = 0;
let player1Wins = 0;
let player2Wins = 0;

function selectRandomCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

function displayPlayer1Card() {
    const playerMat = document.getElementById('player1Mat');
    playerMat.innerHTML = '';
    playerMat.appendChild(gameState.player1Card.getCardElement());
}

function displayPlayer2CardBack() {
    const playerMat = document.getElementById('player2Mat');
    playerMat.innerHTML = '';
    const cardBackElement = document.createElement('div');
    cardBackElement.classList.add('card', 'card-back');
    cardBackElement.textContent = '???';
    playerMat.appendChild(cardBackElement);
}

function displayPlayer2Card() {
    const playerMat = document.getElementById('player2Mat');
    playerMat.innerHTML = '';
    playerMat.appendChild(gameState.player2Card.getCardElement());
}

function proposeChallenge(attribute) {
    if (gameState.attributesChallenged.includes(attribute)) {
        alert("This attribute has already been challenged this round.");
        return;
    }

    gameState.attributesChallenged.push(attribute);
    updateChallengeButtons();
    gameState.proposedAttribute = attribute;
    gameState.player1Agree = true;
    document.getElementById('choiceButtons').style.display = 'none';

    simulatePlayer2Response();
}

function simulatePlayer2Response() {
    const acceptChallenge = Math.random() > 0.8;
    if (acceptChallenge) {
        respondToChallenge(true);
    } else {
        gameState.player2Agree = false;
        let alternativeAttribute = chooseAlternativeAttribute();
        alert(`Player 2 denies ${gameState.proposedAttribute}` + (alternativeAttribute ? ` and challenges ${alternativeAttribute}` : ' and challenges Total Score'));
        gameState.attributesChallenged.push(alternativeAttribute);
        updateChallengeButtons();
        gameState.proposedAttribute = alternativeAttribute;
        document.getElementById('responseButtons').style.display = 'block';
    }
}

function chooseAlternativeAttribute() {
    let attributes = ["stamina", "aura", "skill"];
    attributes = attributes.filter(attr => !gameState.attributesChallenged.includes(attr));
    return attributes[Math.floor(Math.random() * attributes.length)];
}

function respondToPlayer2Challenge(accept) {
    document.getElementById('responseButtons').style.display = 'none';

    if (accept) {
        gameState.player2Agree = true;
        resolveBattle();
    } else {
        if (gameState.attributesChallenged.length >= 3) {
            compareTotalScores();
        } else {
            document.getElementById('choiceButtons').style.display = 'block';
        }
    }
}

function respondToChallenge(accept) {
    gameState.player2Agree = accept;
    if (accept) {
        resolveBattle();
    } else {
        gameState.attributesChallenged.push(gameState.proposedAttribute);
        gameState.proposedAttribute = null;
        gameState.player1Agree = false;
        if (gameState.attributesChallenged.length >= 3) {
            compareTotalScores();
        } else {
            document.getElementById('choiceButtons').style.display = 'block';
        }
    }
}

function resolveBattle() {
    let player1Score = gameState.player1Card[gameState.proposedAttribute];
    let player2Score = gameState.player2Card[gameState.proposedAttribute];

    let result;
    if (player1Score > player2Score) {
        result = 'Player 1 Wins!';
        player1Wins++;
    } else if (player2Score > player1Score) {
        result = 'Player 2 Wins!';
        player2Wins++;
    } else {
        result = 'It\'s a Tie!';
    }

    alert(result + ` Player 1 Wins: ${player1Wins}, Player 2 Wins: ${player2Wins}`);
    displayPlayer2Card(); // Ensure Player 2's card is shown

    if (++roundCount < 20) {
        setTimeout(initializeGameState, 2000); // Wait 2 seconds before starting next round
    } else {
        alert('Game Over! Final Score - Player 1: ' + player1Wins + ', Player 2: ' + player2Wins);
    }
}

function compareTotalScores() {
    displayPlayer2Card(); // Ensure Player 2's card is shown before showing total score

    let player1Total = gameState.player1Card.stamina + gameState.player1Card.aura + gameState.player1Card.skill;
    let player2Total = gameState.player2Card.stamina + gameState.player2Card.aura + gameState.player2Card.skill;

    let result;
    if (player1Total > player2Total) {
        result = 'Player 1 Wins by Total Score!';
        player1Wins++;
    } else if (player2Total > player1Total) {
        result = 'Player 2 Wins by Total Score!';
        player2Wins++;
    } else {
        result = 'Total Score Tie!';
    }

    alert(result + ` Player 1 Wins: ${player1Wins}, Player 2 Wins: ${player2Wins}`);
    if (++roundCount < 20) {
        setTimeout(initializeGameState, 2000);
    } else {
        alert('Game Over! Final Score - Player 1: ' + player1Wins + ', Player 2: ' + player2Wins);
    }
}

function updateChallengeButtons() {
    const buttons = {
        'stamina': document.getElementById('btnStamina'),
        'aura': document.getElementById('btnAura'),
        'skill': document.getElementById('btnSkill')
    };

    for (const attribute in buttons) {
        if (gameState.attributesChallenged.includes(attribute)) {
            buttons[attribute].disabled = true;
            buttons[attribute].classList.add('disabled');
        } else {
            buttons[attribute].disabled = false;
            buttons[attribute].classList.remove('disabled');
        }
    }
}

let gameState = {
    player1Card: null,
    player2Card: null,
    proposedAttribute: null,
    player1Agree: false,
    player2Agree: false,
    attributesChallenged: []
};

function initializeGameState() {
    gameState.player1Card = selectRandomCard(player1Deck);
    gameState.player2Card = selectRandomCard(player2Deck);
    gameState.proposedAttribute = null;
    gameState.player1Agree = false;
    gameState.player2Agree = false;
    gameState.attributesChallenged = [];

    displayPlayer1Card();
    displayPlayer2CardBack();
    document.getElementById('choiceButtons').style.display = 'block';
    updateChallengeButtons();
}

initializeGameState();
