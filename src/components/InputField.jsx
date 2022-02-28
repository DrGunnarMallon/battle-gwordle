import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setError, addGuess } from '../features/game/gameSlice';
import useCheckSolution from '../hooks/useCheckSolution';
import useFiveLetterCheck from '../hooks/useFiveLetterCheck';

function InputField() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.game.error);
  const isSolved = useSelector((state) => state.game.isSolved);
  const hasLost = useSelector((state) => state.game.hasLost);

  const [guess, setGuess] = useState('');
  const { checkSolution } = useCheckSolution();
  const { isFiveLetterWord } = useFiveLetterCheck();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSolved && !hasLost) {
      if (isFiveLetterWord(guess)) {
        const result = checkSolution(guess);
        dispatch(addGuess(result));
        setGuess('');
      } else {
        dispatch(setError('not a five letter word'));
      }
    }
  };

  const handleInput = (e) => {
    if (error) {
      dispatch(setError(''));
    }
    setGuess(e.target.value.toLowerCase());
  };

  return (
    <div className="input-field">
      <form onSubmit={handleSubmit} className="guess-input">
        <input
          onChange={handleInput}
          value={guess}
          maxLength="5"
          disabled={isSolved || hasLost}
          className={`guess-input-field ${error ? 'error' : ''} `}
        />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default InputField;
