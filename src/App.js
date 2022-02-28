import './stylesheets/App.css';
import Header from './components/Header';
import NewGame from './components/NewGame';
import InputField from './components/InputField';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <NewGame />
      <InputField />
      <GameBoard />
    </div>
  );
}

export default App;
