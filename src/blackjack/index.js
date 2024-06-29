import * as _ from "underscore";
import { makePlay, createDeck, createPlayerBoardElement } from "./use-cases";

const btnCreateDeck = document.querySelector("#btnCreateDeck"),
  btnHitCard = document.querySelector("#btnHitCard"),
  btnStopGame = document.querySelector("#btnStopGame"),
  body = document.body;

let deck = [],
  ptsPlayers = [],
  boardsArr = [],
  turn = 0,
  scoresHTMLArr = [],
  boardsPlayer = [],
  totalPlayers = 4;

deck = createDeck();

btnHitCard.disabled = true;
btnStopGame.disabled = true;

const initGame = (numPlayers) => {
  console.log(`Starting game with ${numPlayers} player(s)`);
  cleanBoard();
  createBoard(numPlayers);

  console.log({ ptsPlayers });
  btnHitCard.disabled = false;
  btnStopGame.disabled = false;
};

const cleanBoard = () => {
  turn = 0;
  ptsPlayers = [];
  for (const board of boardsArr) {
    board.remove();
  }
  for (const scoreHTML of scoresHTMLArr) {
    console.log("Cleaning score...");
    scoreHTML.innerText = "0";
  }
};

const createBoard = (numPlayers) => {
  let divRow;
  for (let i = 0; i < numPlayers; i++) {
    const displayName = `${
      i == numPlayers - 1 ? "Computer" : `Player ${i + 1}`
    }`;
    ptsPlayers.push({ name: displayName, score: 0 });
    divRow = createPlayerBoardElement(i, `${displayName} - score: `);
    body.append(divRow);
    boardsArr.push(divRow);
  }
  scoresHTMLArr = document.querySelectorAll("small");
  boardsPlayer = document.querySelectorAll(".player-board");
};

const turnPlayerX = () => {
  let score = ptsPlayers[turn].score;
  const message = `The ${ptsPlayers[turn].name} is playing...`;
  if (turn == ptsPlayers.length - 1) {
    const playersOrdersAsc = ptsPlayers.sort((a, b) => b.score - a.score);
    const playerWithMaxScore = playersOrdersAsc
      .filter((player) => player.score < 21)
      .shift();
    console.log({ playerWithMaxScore });
    const playersWith21 = ptsPlayers.filter((player) => player.score === 21);
    let condition =
      playersWith21.length > 0
        ? score < 21
        : score < 21 && score <= playerWithMaxScore.score;

    do {
      score = makePlay(
        score,
        scoresHTMLArr[turn],
        boardsPlayer[turn],
        message,
        deck
      );
      ptsPlayers[turn] = score;
      console.log({ playersWith21 });
      console.log({ playerWithMaxScore });
      if (playersWith21.length == 0 && playerWithMaxScore.score == 0) {
        break;
      }
      console.log({ score });
      condition =
        playersWith21.length > 0
          ? score < 21
          : score < 21 && score <= playerWithMaxScore.score;
    } while (condition);
    stopGame();
  } else {
    score = makePlay(
      score,
      scoresHTMLArr[turn],
      boardsPlayer[turn],
      message,
      deck
    );
    ptsPlayers[turn].score = score;
    console.log({ score });
    if (score >= 21) {
      stopGame();
    }
  }
};

const validateWinner = () => {
  console.log({ ptsPlayers });
  const message = "";
  //   PTS_PC === PTS_P1
  //     ? "Nadie Gana :c"
  //     : PTS_P1 > 21
  //     ? "Haz perdido, la PC gana"
  //     : PTS_PC > 21
  //     ? "Haz ganado, la PC volo"
  //     : PTS_PC === 21
  //     ? "Gano la PC"
  //     : PTS_P1 === 21
  //     ? "Felicidades haz ganado"
  //     : PTS_PC > PTS_P1
  //     ? "Gano la PC"
  //     : "Analizar casuistica";

  showMessage(message);
};

const showMessage = (message) => {
  setTimeout(() => {
    alert(message);
  }, 100);
};

const validateTurn = () => {
  turn++;
  console.log({ turn });
  console.log(ptsPlayers.length);

  if (turn < ptsPlayers.length) {
    console.log("turnPlayerX");
    console.log(turn);
    turnPlayerX();
  } else {
    console.log("validateWinner");
    btnStopGame.disabled = true;
    btnHitCard.disabled = true;
    validateWinner();
  }
};

// const validatePossibleWinner = () => {
//   ptsPlayers.sort((a, b) => b - a);
//   for (const score of ptsPlayers) {
//     if (score <= 21) {
//       return score;
//     }
//   }
// };
// Events
const stopGame = () => {
  validateTurn();
};

btnCreateDeck.addEventListener("click", () => {
  initGame(totalPlayers);
});

btnStopGame.addEventListener("click", () => {
  stopGame();
});

btnHitCard.addEventListener("click", () => {
  turnPlayerX();
});
