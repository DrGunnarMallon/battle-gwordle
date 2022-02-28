import { useSelector } from 'react-redux';

export default function useCheckSolution() {
  const puzzleWord = useSelector((state) => state.game.puzzleWord);

  const checkSolution = (word) => {
    console.log(puzzleWord, word);
  };

  return { checkSolution };
}
