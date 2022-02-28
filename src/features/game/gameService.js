const loadDictionary = async () => {
  // fetch the dictionary of words
  const dict = await fetch('./assets/five-letter-words.json');

  // process the dictionary into an array format
  const result = await dict.json();

  // change all words to lower-case
  return result.map((res) => res.toLowerCase());
};

const gameService = {
  loadDictionary,
};

export default gameService;
