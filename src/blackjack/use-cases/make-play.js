import { cardValue } from "./";
import { hitCard } from "./";

/**
 * This function makes a play in the game according 
 * to the player turn and returns the new score
 * @param {Number} scoreAcc is the current score of the player
 * @param {Element} scoreHTML is the HTML element where the score is displayed
 * @param {Element} divPlayerBoard is the HTML element where the cards are displayed
 * @param {String} displayName is the name of the player
 * @param {Array<String>} deck is the deck of cards
 * @returns {Number} The new score of the player
 */
export const makePlay = (
  scoreAcc,
  scoreHTML,
  divPlayerBoard,
  displayName,
  deck
) => {
  console.log(`${displayName}`);
  const card = hitCard(deck);
  console.log(deck);
  scoreAcc += cardValue(card);
  scoreHTML.innerText = scoreAcc;
  const newCard = document.createElement("img");
  newCard.classList.add("blackjack-card");
  newCard.src = `assets/cards/${card}.png`;
  divPlayerBoard.append(newCard);
  return scoreAcc;
};
