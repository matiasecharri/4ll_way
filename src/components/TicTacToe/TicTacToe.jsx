import { useState } from "react";
import "/src/components/TicTacToe/TicTacToe.css";

const PLAYERS = {
  X: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  ),
  O: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};

const Square = ({ position, handleClick, children, styles }) => {
  return (
    <div
      className="cell square"
      onClick={() => {
        handleClick(position, children);
      }}
    >
      <span className={`cell__content ${styles}`}>{children}</span>
    </div>
  );
};

const TicTacToe = () => {
  const [turn, setTurn] = useState(PLAYERS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [win, setWin] = useState(false);

  const changeTurn = (position, children) => {
    if (children !== null) return;

    const newTurn = turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
    const updatedBoard = board.map((XorO, i) =>
      position === i && XorO === null ? turn : XorO
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
