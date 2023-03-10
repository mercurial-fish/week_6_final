class Player {
    constructor() {
        this.playerHand = [];

    };
};

class Card {
    constructor (face, value, suit) {
        this.value = value;
        this.face = face;
        this.suit = suit;
    }
    describe() {
        return `This card is the ${this.face} of ${this.suit}`;
    }

};


class Deck {
    constructor() {

        this.deck = [];
        //this array will take all of the cards created by the below values
        this.face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.playerOne = new Player();
        this.playerTwo = new Player();


    };
        //these arrays hold the values needed to create the cards
        // for loop to generate a set of cards
    createCards() {
        for (let i = 0; i < this.suits.length; i++) {
            console.log(i, "suit: ", this.suits[i]);
            // looping 13 times
            for (let j = 0; j < this.face.length; j++) {
                console.log(j, "face: ", this.face[j]);
                let face = this.face[j];
                let value = this.value[j];
                let suit = this.suits[i];
                this.deck.push(new Card(face, value, suit))
            };
        };
        console.log(this.deck); //printing entire deck to console
    };


    shuffleCards() {
        console.log("shuffling cards...");
        //gonna try out the fisher-yates shuffle method
        //it will go through the array, starting from last to first.
        //it will take the last element, get a random index between 0 and array.length - 1
        //and then it will slice that element into the place of the last element

            const shufflingDeck = this.deck.slice();
            //provides a shallow copy of the array so we don't mutate the original array
            let shuffledDeck = [];

            while (shufflingDeck.length > 0) {
                const randomIndex = Math.floor(Math.random() * shufflingDeck.length);
                //math.floor always rounds down and returns largest integer than or equal to
                //a given number. Math.random provides a random number greater than 0 and less than 1
                //this will give the random integer and math.floor will make sure it is a whole number
                const removedCard = shufflingDeck.splice(randomIndex, 1)[0];
                shuffledDeck.push(removedCard);
            };
            this.deck = shuffledDeck;
            //this should ensure that I can use the newly shuffled deck in other methods;
            console.log(this.deck);
        };

    dealCards() {
       console.log("dealing cards...");
        for (let i = 0; i < this.deck.length; i++) {
            if (i < 26) {
                this.playerOne.playerHand.push(this.deck[i]);
            } else {
                this.playerTwo.playerHand.push(this.deck[i]);
            };
        };

    };

    playWar() {
        console.log("playing War...");
        let playerOneResult = 0;
        let playerTwoResult = 0;
        for (let i = 0; i < this.playerOne.playerHand.length; i++) {

            if (this.playerOne.playerHand[i].value > this.playerTwo.playerHand[i].value) {
               playerOneResult += 1;
            } else if (this.playerOne.playerHand[i].value < this.playerTwo.playerHand[i].value) {
               playerTwoResult += 1;
            } else {
               playerOneResult += 0;
               playerTwoResult += 0;
            };

    };

    console.log(`Player One: ${playerOneResult}
                 Player Two: ${playerTwoResult}`);//prints score to console

    alert(`    Player One: ${playerOneResult} 
    Player Two: ${playerTwoResult}`); //sends alert to browser of score
    alert("and the winner is....*drum roll*");

    if (playerOneResult > playerTwoResult) {
        console.log("Player One Wins!!!");
        alert("Player One!!!")
     } else if (playerTwoResult > playerOneResult) {
        console.log("Player Two Wins!!!");
        alert("Player Two!!!")
     } else {
        console.log("It's a Tie!!!");
        alert("No one! It's a Tie! BOOOOO!!!!")
     };//this boolean is used to print the winner of the game to the console and send an alert to the browser
    };

         };
 
let newDeck = new Deck();//calls on Deck class
newDeck.createCards();//calls on createCards method that should create the cards for the deck
newDeck.shuffleCards();//method that shuffles cards in new deck created and then accepts that shuffled deck as the deck for the class
newDeck.dealCards();//splits the cards between the two players
newDeck.playWar();//compares the cards, totals the score and prints to console