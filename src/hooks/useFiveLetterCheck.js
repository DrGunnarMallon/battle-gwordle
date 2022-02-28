import { useSelector } from 'react-redux';

function useFiveLetterCheck() {
  const dictionary = useSelector((state) => state.game.dictionary);
  const isDictionaryLoaded = useSelector((state) => state.game.isDictionaryLoaded);

  const isFiveLetterWord = (word) => {
    if (isDictionaryLoaded) {
      return dictionary.includes(word);
    }

    return null;
  };

  return { isFiveLetterWord };
}

export default useFiveLetterCheck;
