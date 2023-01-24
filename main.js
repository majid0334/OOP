import { Card, Deck, Player, Board } from "./game.js";

const d = new Deck();
d.deck();
console.log(d.cards);

let gameBoard = new Board();
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
console.log(gameBoard.newDeck);
