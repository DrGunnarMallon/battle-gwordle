import React from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Letters() {
  const letters = useSelector((state) => state.game.letters);
  const [showLetters, setShowLetters] = useState(true);

  const getColor = (letter) => {
    const result = letters.filter((data) => data.char === letter);
    if (result.length > 0) {
      return result[0].color;
    } else {
      return '';
    }
  };

  const handleToggle = () => {
    setShowLetters(!showLetters);
    const element = document.querySelector('.letters');
    element.classList.toggle('hidden-letters');
  };

  return (
    <div className="letters-wrapper">
      <div className="wrapper-close" onClick={handleToggle}>
        Show letters
        {!showLetters && <FaToggleOff className="icon" />}
        {showLetters && <FaToggleOn className="icon" />}
      </div>
      <div className="letters">
        <div className="row">
          <div className={getColor('q')}>q</div>
          <div className={getColor('w')}>w</div>
          <div className={getColor('e')}>e</div>
          <div className={getColor('r')}>r</div>
          <div className={getColor('t')}>t</div>
          <div className={getColor('y')}>y</div>
          <div className={getColor('u')}>u</div>
          <div className={getColor('i')}>i</div>
          <div className={getColor('o')}>o</div>
          <div className={getColor('p')}>p</div>
        </div>
        <div className="row">
          <div className={getColor('a')}>a</div>
          <div className={getColor('s')}>s</div>
          <div className={getColor('d')}>d</div>
          <div className={getColor('f')}>f</div>
          <div className={getColor('g')}>g</div>
          <div className={getColor('h')}>h</div>
          <div className={getColor('j')}>j</div>
          <div className={getColor('k')}>k</div>
          <div className={getColor('l')}>l</div>
        </div>
        <div className="row">
          <div className={getColor('z')}>z</div>
          <div className={getColor('x')}>x</div>
          <div className={getColor('c')}>c</div>
          <div className={getColor('v')}>v</div>
          <div className={getColor('b')}>b</div>
          <div className={getColor('n')}>n</div>
          <div className={getColor('m')}>m</div>
        </div>
      </div>
    </div>
  );
}

export default Letters;
