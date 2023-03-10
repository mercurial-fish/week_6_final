const expect = chai.expect;
const assert = chai.assert;

describe("Create Player", () => {
    it("#Should create a new player", () => {
        let playerOne = new Player;

        expect(playerOne).to.deep.equal(new Player);
    })
});

describe("Create Cards", () => {
    it("#Should create a card", () => {
        let testCard = new Card("King", 12, "Diamonds");

        expect(testCard).to.include({face: "King", value: 12, suit: "Diamonds"});
    })
});

