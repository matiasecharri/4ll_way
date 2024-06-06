import "/src/components/Counter/Counter.css";
import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(0);

  const incrementCounter = () => {
    setCounterState(counterState => counterState + 1);
  };
  const decrementCounter = () => {
    if (counterState === 0) return;
    setCounterState(counterState => counterState - 1);
  };

  return (
    <div className="button-container">
      <button
        onClick={incrementCounter}
        onMouseEnter={decrementCounter}
        className="button-container__button"
      >
        {counterState}
      </button>
    </div>
  );
};

export default Counter;
