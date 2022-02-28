import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

function GameBoard() {
  const gameBoard = useSelector((state) => state.game.gameBoard);
  const isSolved = useSelector((state) => state.game.isSolved);
  const hasLost = useSelector((state) => state.game.hasLost);

  if (isSolved) {
    return (
      <>
        <h1>You won!!</h1>
        <p>Legend!</p>
      </>
    );
  }

  if (hasLost) {
    return (
      <>
        <h1>YOU LOSER</h1>
        <p>Mate, you had 8 gos!</p>
      </>
    );
  }

  return (
    <div className="gameBoard">
      {gameBoard.map((value, index) => (
        <div key={Math.random()} className="row">
          {value.map((value, index) => (
            <div key={Math.random()} className={`cell ${value.color}`}>
              {value.char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
