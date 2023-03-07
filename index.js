class Card {
    constructor (value, suit) {
        this.value = value;
        this.suit = suit;
    }
    describe() {
        return `This card is the ${this.value} of ${this.suit}`;
    }

};

//26 need to go to each player
//suits and numbers must be defined

class Deck {
    constructor(deck) {
        this.deck = deck;
        this.cards = [];
        this.suits = [];
    };

    dealCards() {

    };

};

//this needs to be divided by two

class Player {
    constructor(playerName) {
        this.playerName = playerName;
    }
};
//each player will have 26 cards
// value 1 - 13; suits are hearts, diamonds, spades and clubs
// J = 11; Q = 12; K = 13; Does this need to be reflected?
