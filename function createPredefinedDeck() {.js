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
        if (Math.random() < 0.25) {
            const rarities = ["rare", "veryRare", "epic", "spectacular"];
            card.rarity = rarities[Math.floor(Math.random() * rarities.length)];
        }
    });

    return predefinedCards.sort(() => Math.random() - 0.5).slice(0, 20);
}
