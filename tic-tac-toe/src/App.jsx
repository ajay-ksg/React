import { useState } from "react";
import Player from "./component/Player.jsx";
import GameBord from "./component/GameBord.jsx";
import Log from "./component/Log.jsx";
import GameOver from "./component/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";


const initialGameBord = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
      if(gameTurns.length > 0 && gameTurns[0].player === 'X')
        currentPlayer = 'O';
  return currentPlayer;      
}
function deriveGameBoard(playerTurns) {
  const gameBoard = [...initialGameBord.map(x => [...x])];
  for (const turn of playerTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function decideWinner(gameBoard, players) {
  let winner;
  WINNING_COMBINATIONS.forEach(comb => {
    const firstSquareSymbol = gameBoard[comb[0].row][comb[0].column];
    const secondSquareSymbol = gameBoard[comb[1].row][comb[1].column];
    const thirdSquareSymbol = gameBoard[comb[2].row][comb[2].column];

    if (!winner && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol == thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  });
  return winner;
}

export default function App() {
  const [playerTurns, setPlayerTurns] = useState([]);
  const [players, setPlayers] = useState({
    "X": "Player 1",
    "O": "Player 2"
  });

  const activePlayer = deriveActivePlayer(playerTurns);

  const gameBoard = deriveGameBoard(playerTurns);

  let winner = decideWinner(gameBoard, players);

 const hasDraw = playerTurns.length === 9 && !winner;

  function changeActivePlayer(rowIndex, colIndex){
    setPlayerTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedturns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
      return updatedturns;
    })
  }

  function handleRematch(){
    setPlayerTurns([]);
  }

  function handleNameChange(symbol,newName){
    setPlayers(prevPlayers => {
      let updatedPlayer = {...prevPlayers}
      updatedPlayer[symbol] = newName
      return updatedPlayer;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialPlayerName={"Player 1"} symbol={'X'} isActive = {activePlayer === 'X'} onNameChange = {handleNameChange}/>
        <Player initialPlayerName={"Player 2"} symbol={'O'} isActive = {activePlayer === 'O'} onNameChange = {handleNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRematch={handleRematch}/>}
        <GameBord 
          onSquareSelect={changeActivePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={playerTurns} />
    </main>    
    );
}

