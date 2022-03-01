const loadDictionary = async () => {
  // fetch the dictionary of words
  const dict = await fetch('./assets/five-letter-words.json');

  // process the dictionary into an array format
  const result = await dict.json();

  // change all words to lower-case
  return result.map((res) => res.toLowerCase());
};

const addLetter = (letter, letters) => {
  const working = [...letters];

  for (let i = 0; i < working.length; i++) {
    if (working[i].char === letter.char) {
      if (working[i].color === 'included' && letter.color === 'correct') {
        working[i].color = 'correct';
      }
      return working;
    }
  }

  working.push(letter);

  return working;
};

const gameService = {
  loadDictionary,
  addLetter,
};

export default gameService;
