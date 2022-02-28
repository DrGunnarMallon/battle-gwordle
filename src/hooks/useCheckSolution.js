import { useSelector, useDispatch } from 'react-redux';
import { solvePuzzle } from '../features/game/gameSlice';

export default function useCheckSolution() {
  const dispatch = useDispatch();
  const puzzleWord = useSelector((state) => state.game.puzzleWord);

  // check word against puzzleWord
  const checkSolution = (word) => {
    const returnValue = [];
    let correct = 0;

    for (let i = 0; i < 5; i++) {
      if (word[i] === puzzleWord[i]) {
        returnValue.push({ char: word[i], color: 'g' });
        correct += 1;
      } else if (puzzleWord.includes(word[i])) {
        returnValue.push({ char: word[i], color: 'y' });
      } else {
        returnValue.push({ char: word[i], color: 'b' });
      }
    }

    if (correct === 5) {
      dispatch(solvePuzzle());
    }

    return returnValue;
  };

  return { checkSolution };
}
