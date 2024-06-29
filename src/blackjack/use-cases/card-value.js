/**
 * This function returns the value of the card requested
 * @param {String} requestedCard - The value of the card requested
 * @param {{[key: String]: Number}} scoreCardLetters - Object with the score of the cards that are letters
 * @returns {Number} Value of the card requested
 */
export const cardValue = (requestedCard) => {
  const scoreCardLetters = { A: 11, Q: 10, J: 10, K: 10 };
  console.log({ requestedCard }); 
  const value = requestedCard.substring(0, requestedCard.length - 1);
  console.log(`Score returned : ${value}`);
  return (scoreCardLetters[`${value}`] ?? value) * 1;
};
