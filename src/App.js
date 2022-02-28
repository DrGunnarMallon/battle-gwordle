import './stylesheets/App.css';
import Header from './components/Header';
import NewGame from './components/NewGame';
import InputField from './components/InputField';
import GameBoard from './components/GameBoard';

import { useSelector } from 'react-redux';

function App() {
  const puzzleWord = useSelector((state) => state.game.puzzleWord);

  return (
    <div className="App">
      <Header />
      <NewGame />
      {puzzleWord && (
        <>
          <InputField />
          <GameBoard />
        </>
      )}
    </div>
  );
}

export default App;
