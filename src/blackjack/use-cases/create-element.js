/**
 * This function creates a new player board HTML element
 * @param {Number} i index of the player
 * @param {String} displayName name of the player to display in the board
 * 
 */
export const createPlayerBoardElement = (i, displayName) => {
  const divRow = document.createElement("div"),
    divCol = document.createElement("div"),
    h1 = document.createElement("h1"),
    small = document.createElement("small"),
    divCards = document.createElement("div");
  divRow.classList.add("row", "container", "mt-4");
  divCol.classList.add("col");
  h1.innerText = displayName;
  small.innerText = "0";
  divCards.id = `player-cards-${i}`;

  divRow.append(divCol);
  divCol.append(h1);
  h1.append(small);
  divCol.append(divCards);
  divCards.classList.add("player-board");
  return divRow;
};
