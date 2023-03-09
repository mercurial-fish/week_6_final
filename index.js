class Player {
    constructor() {
        this.player = player;
        this.playerHand = [];

    };
};

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
                shuffledDeck.push(shufflingDeck[randomIndex]);
                shufflingDeck.splice(randomIndex, 1);
            };
            shuffledDeck = this.deck;
            console.log(this.deck);
        };

    dealCards() {
        let playerOne = new Player();
        let playerTwo = new Player();
        for (let i = 0; i < this.deck.length; i++) {
            if (i < 26) {
                playerOne.playerHand.push(this.deck[i]);
            } else {
                playerTwo.playerHand.push(this.deck[i]);
            };
        };
        console.log(playerOne.playerHand);
        console.log(playerTwo.playerHand);
    };
    playWar() {
        let playerOneResult = 0;
        let playerTwoResult = 0;
        for (let i = 0; i < playerOne.playerHand.length; i++) {

            if (playerOne.playerHand[i].value > playerTwo.playerHand[i].value) {
               playerOneResult += 1;
            } else if (playerOne.playerHand[i].value < playerTwo.playerHand[i].value) {
               playerTwoResult += 1;
            } else {
               playerOneResult += 0;
               playerTwoResult += 0;
            };

    };

    console.log(`Player One: ${playerOneResult}
            Player Two: ${playerTwoResult}`);

    if (playerOneResult > playerTwoResult) {
        console.log("Player One Wins!!!");
     } else if (playerTwoResult > playerOneResult) {
        console.log("Player Two Wins!!!");
     } else {
        console.log("It's a Tie!!!");
     };

            

        // error: player is not defined

            
            // when I ran the above code that is in the comments, it printed out
            // after every iteration
             };

         };


    // dealCards() {
    //     //cards will need to be shuffled, then they can be split down the middle
    //     //to the two players
    //     //they will each get a playerHand array
    // };


// I think I need to have something like selectedGenre, where it's pushed
//to the newly created array of selectedGenre, but two times...

        //both players will compare the cards they were dealt
        //the card needs to be drawn and then compared and then a point value assigned
 

let newDeck = new Deck();
newDeck.shuffleCards();
newDeck.dealCards();
newDeck.playWar();


//this needs to be divided by two


//each player will have 26 cards
// value 1 - 13; suits are hearts, diamonds, spades and clubs
