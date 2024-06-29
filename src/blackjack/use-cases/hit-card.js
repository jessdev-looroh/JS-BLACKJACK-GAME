
/**
 * This function pop a card from the deck and return it
 * @param {string[]} deck - Array of cards
 * @returns {string} card - The card popped from the deck
*/
export const hitCard = (deck) => {
  if (deck.length === 0) {
    throw "Deck is empty, can't hit more cards";
  }
  return `${deck.pop()}`;
};
