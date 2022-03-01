import { FaChessRook } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { resetGame } from '../features/game/gameSlice';

function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetGame());
  };

  return (
    <div className="header">
      <FaChessRook />
      <div onClick={handleClick} className="title">
        GG Word Game
      </div>
      <FaChessRook />
    </div>
  );
}

export default Header;
