import CellComponent from '../components/CellComponent';
import RowComponent from '../components/RowComponent';
import { useBoard } from '../context/BoardContext';

const TicTacToe = () => {
  const { board, winner, isCPUNext, playAgainFn } = useBoard();
  
  function displayWinner() {
    if (winner === "draw") {
      return "It's a draw!";
    } else if (winner) {
      return `${winner} won!`;
    }
  }

  function displayTurn() {
    if (isCPUNext) {
      return "CPU's turn";
    } else {
      return "Your turn";
    }
  }

  return (
    <div>
      <div>{!winner && displayTurn()}</div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {board.map((row, rowIdx) => (
          <RowComponent>
            {row.map((_, cellIdx) => (
              <CellComponent
                row={rowIdx}
                cell={cellIdx}
              />
            ))}
          </RowComponent>
        ))}
      </div>
      {winner && <h2>{displayWinner()}</h2>}
      {winner && (
        <button onClick={playAgainFn}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
