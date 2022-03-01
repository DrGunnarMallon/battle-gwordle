import React from 'react';

function Instructions() {
  return (
    <div className="instructions">
      <p>
        GG Word Game is a take on the famous Wordle game by{' '}
        <a target="__new" href="https://powerlanguage.co.uk/">
          Josh Wardle
        </a>
        .
      </p>
      <p>You have 8 attempts to guess the Puzzle Word:</p>
      <ul>
        <li>
          The guess as to be an English five-letter-word, otherwise the letters will turn{' '}
          <font color="red">red</font>.
        </li>

        <li>
          If a letter in your guess is contained in the puzzle word, it will turn{' '}
          <font color="yellow">yellow</font>.
        </li>
        <li>
          If the letter happens to be in the right position, it will turn{' '}
          <font color="lightgreen">green</font>.
        </li>
        <li>
          At the bottom of the game you can get a little help with a list of color-coded letters
          that you have attempted.
        </li>
      </ul>
      <p>Coming soon... battle words (play against your friends!)</p>
      <p>Good luck and have fun!</p>
    </div>
  );
}

export default Instructions;
