import _ from "underscore";

/**
 * This function create a new deck of cards
 * @param {string[]} typesOfCards - Array with the types of cards ej: ["C", "D", "H", "S"]
 * @param {{[key: number] : string }} cardLetters - Object with card's values in letters , ej: { 1: "A", 11: "J", 12: "Q", 13: "K" }
 * @returns {string[]} deck - Array with the cards of the deck
 */

export const createDeck = () => {
  const typesOfCards = ["C", "D", "H", "S"],
    cardLetters = { 1: "A", 11: "J", 12: "Q", 13: "K" };

  let deck = [];
  console.log("Creating a new deck.....");
  deck = [];
  for (let i = 1; i <= 13; i++) {
    for (const type of typesOfCards) {
      deck.push((cardLetters[i] ?? i) + type);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};
