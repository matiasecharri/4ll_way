import { useEffect, useState } from "react";
import "/src/components/TicTacToe/TicTacToe.css";

const TURNS = {
  x: "❌",
  o: "⭕",
};

const Square = ({ children, changeBoard, position }) => {
  return (
    <div
      className="square"
      onClick={() => {
        changeBoard(position);
      }}
    >
      {children}
    </div>
  );
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);

  useEffect(() => {
    console.log(board);
  }, [board]);

  const updateBoard = position => {
    const newBoard = [...board];
    newBoard[position] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
  };

  const turnFormater = currentTurn => <h5>{`Turn: ${currentTurn}`}</h5>;

  return (
    <main className="board">
      <h1> Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square position={index} changeBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="the-turn">
        {turn === TURNS.x ? (
          <Square>{turnFormater(TURNS.x)}</Square>
        ) : (
          <Square>{turnFormater(TURNS.o)}</Square>
        )}
      </section>
    </main>
  );
};

export default TicTacToe;
