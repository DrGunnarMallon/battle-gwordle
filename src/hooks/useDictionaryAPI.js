import React from 'react';

function useDictionaryAPI() {
  const getWordFromDictionary = async (word) => {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'.concat(word);
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  return { getWordFromDictionary };
}

export default useDictionaryAPI;
