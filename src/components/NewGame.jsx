import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDictionary, createNewPuzzleWord, resetGame } from '../features/game/gameSlice';

function NewGame() {
  const dispatch = useDispatch();
  const isDictionaryLoaded = useSelector((state) => state.game.isDictionaryLoaded);

  const handleClick = async () => {
    if (!isDictionaryLoaded) {
      await dispatch(loadDictionary());
    }
    dispatch(resetGame());
    dispatch(createNewPuzzleWord());
  };

  return (
    <button className="btn" onClick={handleClick}>
      New Game
    </button>
  );
}

export default NewGame;
