import { useSelector, useDispatch } from 'react-redux';
import { solvePuzzle, addLetter } from '../features/game/gameSlice';

export default function useCheckSolution() {
  const dispatch = useDispatch();
  const puzzleWord = useSelector((state) => state.game.puzzleWord);
  const letters = useSelector((state) => state.game.puzzleWord);

  // check word against puzzleWord
  const checkSolution = (word) => {
    const returnValue = [];
    let correct = 0;

    for (let i = 0; i < 5; i++) {
      if (word[i] === puzzleWord[i]) {
        returnValue.push({ char: word[i], color: 'g' });
        dispatch(addLetter({ char: word[i], color: 'correct' }));
        correct += 1;
      } else if (puzzleWord.includes(word[i])) {
        returnValue.push({ char: word[i], color: 'y' });
        dispatch(addLetter({ char: word[i], color: 'included' }));
      } else {
        returnValue.push({ char: word[i], color: 'b' });
        dispatch(addLetter({ char: word[i], color: 'excluded' }));
      }
    }

    if (correct === 5) {
      dispatch(solvePuzzle());
    }

    return returnValue;
  };

  return { checkSolution };
}
