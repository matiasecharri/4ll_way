import { useEffect, useState } from "react";
import "/src/components/TicTacToe/TicTacToe.css";

const PLAYERS = {
  X: "X",
  O: "O",
};

const Square = ({ position, handleClick, children, styles }) => {
  return (
    <div
      className="cell square"
      onClick={() => {
        handleClick(position);
      }}
    >
      <span className={`cell__content ${styles}`}>{children}</span>
    </div>
  );
};

const TicTacToe = () => {
  const [turn, setTurn] = useState(PLAYERS.X);
  const [board, setBoard] = useState(Array(9).fill(null));

  const changeTurn = position => {
    const newTurn = turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X;

    const updatedBoard = board.map((XorO, i) =>
      position === i ? turn : XorO
    );

    setBoard(updatedBoard);
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1> Tic Tac Toe</h1>
      <section className="game">
        {board.map((XorO, i) => {
          return (
            <Square key={i} position={i} handleClick={changeTurn}>
              {XorO}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square styles={turn === PLAYERS.X ? "is-selected" : null}>
          {PLAYERS.X}
        </Square>
        <Square styles={turn === PLAYERS.O ? "is-selected" : null}>
          {PLAYERS.O}
        </Square>
      </section>
    </main>
  );
};

export default TicTacToe;
