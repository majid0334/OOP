export class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

export class Deck {
  constructor() {
    this.cards = [];
  }
  deck() {
    let suits = ["clubs", "diamonds", "hearts", "spades"];
    let ranks = [
      "ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king",
    ];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], values[j]));
      }
    }
  }
  shuffle() {
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
      location1 = Math.floor(Math.random() * this.cards.length);
      location2 = Math.floor(Math.random() * this.cards.length);
      tmp = this.cards[location1];
      this.cards[location1] = this.cards[location2];
      this.cards[location2] = tmp;
    }
  }
}

/* const d = new Deck();
d.deck();
console.log(d.cards); */

export class Player {
  constructor(name) {
    this.playerName = name;
    this.playerCards = [];
  }
}
export class Board {
  constructor() {
    this.pileOfCards = [];
    this.players = [];
    this.newDeck = [];
  }

  //ger ut 5 slumpässiga kort til vara spelare
  start(playerOneName, playerTwoName) {
    this.players.push(new Player(playerOneName));
    this.players.push(new Player(playerTwoName));
    let d = new Deck();
    d.deck();
    d.shuffle();
    this.players[0].playerCards = d.cards.slice(0, 5);
    this.players[1].playerCards = d.cards.slice(6, 11);
  }

  //Lägger in kort i kasthögen mängden väljer man själv
  removeCards(removeAmount) {
    const removeItem = this.players[0].playerCards.splice(0, removeAmount);
    const removeItem2 = this.players[1].playerCards.splice(0, removeAmount);
    this.pileOfCards.push(removeItem);
    this.pileOfCards.push(removeItem2);
  }

  //drar mängden kort man vill ha
  drawMoreCards(amountToDraw) {
    let d = new Deck();
    d.deck();
    d.shuffle();
    this.players[0].playerCards = d.cards.slice(0, amountToDraw);
    this.players[1].playerCards = d.cards.slice(0, amountToDraw);
  }

  //pusha allt kort från deck
  toArrayDeck(removeAmount) {
    let removeItem = this.players[0].playerCards.splice(0, removeAmount);
    let removeItem2 = this.players[1].playerCards.splice(0, removeAmount);
    removeItem = removeItem2;
    this.pileOfCards[0].push(removeItem);
    this.pileOfCards[1].push(removeItem2);
    this.newDeck.push(this.pileOfCards);
    this.pileOfCards = [];
  }
}
/* let gameBoard = new Board();
//5 slumpämmisaga kort
gameBoard.start("Spelare 1", "Spelare 2");
//Vi drar 2 kort
gameBoard.drawMoreCards(7);
//Väljer mängden kort man vill kasta i högen
gameBoard.removeCards(2);
//Spelaren väljer mängden kort den  lägger in det i kasthög och sedan till vår deck
gameBoard.toArrayDeck(5);
console.log(gameBoard.players);
console.log(gameBoard.pileOfCards);
console.log(gameBoard.newDeck); */
