// import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
// import useDictionaryAPI from '../hooks/useDictionaryAPI';

function GameBoard() {
  const gameBoard = useSelector((state) => state.game.gameBoard);
  const isSolved = useSelector((state) => state.game.isSolved);
  const hasLost = useSelector((state) => state.game.hasLost);
  const puzzleWord = useSelector((state) => state.game.puzzleWord);
  const meaning = useSelector((state) => state.game.meaning);

  if (isSolved) {
    return (
      <>
        <h1>You won!!</h1>
        <div className="row">
          {puzzleWord.split('').map((letter) => (
            <div key={Math.random()} className="cell g">
              {letter}
            </div>
          ))}
        </div>
        "{meaning}"<p>Legend 😎</p>
      </>
    );
  }

  if (hasLost) {
    return (
      <>
        <h1>YOU LOSER!</h1>
        <div className="row">
          {puzzleWord.split('').map((letter) => (
            <div key={Math.random()} className="cell g">
              {letter}
            </div>
          ))}
        </div>
        "{meaning}"<p>You had 8 attempts! 🤣</p>
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

/*
[
  {
    word: 'word',
    phonetic: '/wɜːd/',
    phonetics: [
      { text: '/wɜːd/', audio: '' },
      {
        text: '/wɝd/',
        audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/word-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1197728',
        license: { name: 'BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0' },
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The smallest unit of language that has a particular meaning and can be expressed by itself; the smallest discrete, meaningful unit of language. (contrast morpheme.)',
            synonyms: [],
            antonyms: [],
          },
          { definition: 'Something like such a unit of language:', synonyms: [], antonyms: [] },
          {
            definition: 'The fact or act of speaking, as opposed to taking action. .',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'Something that someone said; a comment, utterance; speech.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'A watchword or rallying cry, a verbal signal (even when consisting of multiple words).',
            synonyms: [],
            antonyms: [],
            example: "mum's the word",
          },
          { definition: 'A proverb or motto.', synonyms: [], antonyms: [] },
          {
            definition: 'News; tidings (used without an article).',
            synonyms: [],
            antonyms: [],
            example: 'Have you had any word from John yet?',
          },
          {
            definition: 'An order; a request or instruction; an expression of will.',
            synonyms: [],
            antonyms: [],
            example: "Don't fire till I give the word",
          },
          {
            definition: 'A promise; an oath or guarantee.',
            synonyms: ['promise'],
            antonyms: [],
            example: 'I give you my word that I will be there on time.',
          },
          {
            definition: 'A brief discussion or conversation.',
            synonyms: [],
            antonyms: [],
            example: 'Can I have a word with you?',
          },
          {
            definition: '(in the plural) See words.',
            synonyms: [],
            antonyms: [],
            example:
              'There had been words between him and the secretary about the outcome of the meeting.',
          },
          {
            definition:
              '(sometimes Word) Communication from God; the message of the Christian gospel; the Bible, Scripture.',
            synonyms: ['Bible', 'word of God'],
            antonyms: [],
            example:
              'Her parents had lived in Botswana, spreading the word among the tribespeople.',
          },
          {
            definition: '(sometimes Word) Logos, Christ.',
            synonyms: ['God', 'Logos'],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'To say or write (something) using particular words; to phrase (something).',
            synonyms: ['express', 'phrase', 'put into words', 'state'],
            antonyms: [],
            example: 'I’m not sure how to word this letter to the council.',
          },
          { definition: 'To flatter with words, to cajole.', synonyms: [], antonyms: [] },
          { definition: 'To ply or overpower with words.', synonyms: [], antonyms: [] },
          { definition: 'To conjure with a word.', synonyms: [], antonyms: [] },
          {
            definition: 'To speak, to use words; to converse, to discourse.',
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: 'interjection',
        definitions: [
          {
            definition:
              'Truth, indeed, that is the truth! The shortened form of the statement "My word is my bond."',
            synonyms: [],
            antonyms: [],
            example:
              '"Yo, that movie was epic!" / "Word?" ("You speak the truth?") / "Word." ("I speak the truth.")',
          },
          {
            definition:
              '(stereotypically) An abbreviated form of word up; a statement of the acknowledgment of fact with a hint of nonchalant approval.',
            synonyms: [],
            antonyms: [],
          },
        ],
      },
    ],
    license: { name: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0' },
    sourceUrls: ['https://en.wiktionary.org/wiki/word'],
  },
  {
    word: 'word',
    phonetic: '/wɜːd/',
    phonetics: [
      { text: '/wɜːd/', audio: '' },
      {
        text: '/wɝd/',
        audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/word-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1197728',
        license: { name: 'BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0' },
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: '(except in set phrases) To be, become, betide.',
            synonyms: [],
            antonyms: [],
            example: 'Well worth thee, me friend.',
          },
        ],
      },
    ],
    license: { name: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0' },
    sourceUrls: ['https://en.wiktionary.org/wiki/word', 'https://en.wiktionary.org/wiki/worth'],
  },
];

*/
