class Card {
    constructor (rank, value, suit) {
        this.value = value;
        this.rank = rank;
        this.suit = suit;
    }
    describe() {
        return `This card is the ${this.value} of ${this.suit}`;
    }

};

//26 need to go to each player
//suits and numbers must be defined

class Deck {
    constructor() {
        this.deck = [];
        //this array will take all of the cards created by the below values
        this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        //these arrays hold the values needed to create the cards
    };

    createCards() {
        console.log("creating cards...");
        // for loop to generate a set of cards
        for (let i = 0; i < this.suits.length; i++) {
            console.log(i, "suit: ", this.suits[i]);
            // looping 13 times
            for (let j = 0; j < this.rank.length; j++) {
                console.log(j, "rank: ", this.rank[j]);
                let rank = this.rank[j];
                let value = this.value[j];
                let suit = this.suits[i];
                this.deck.push(new Card(rank, value, suit))
            };
        }
        console.log(this.deck); //printing entire deck to console

    };

    shuffleCards() {
        console.log("shuffling cards...");
    };

    dealCards() {
        //cards will need to be shuffled, then they can be split down the middle
        //to the two players
        //they will each get a playerHand array
    };
};

class Player {
    constructor(playerName) {
        this.playerHand = [];
    };

    playHand() {
        console.log("Playing cards dealt...");
        //both players will compare the cards they were dealt
        //the card needs to be drawn and then compared and then a point value assigned
    }
}



//this needs to be divided by two


//each player will have 26 cards
// value 1 - 13; suits are hearts, diamonds, spades and clubs