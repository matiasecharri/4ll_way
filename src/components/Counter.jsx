import "/src/components/Counter.css";
import { useState, useEffect } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(0);

  useEffect(() => {
    console.log(`The counter has updated his value: ${counterState}`);
  }, [counterState]); /*⛓️Vinculated to counter state⛓️ */

  const incrementCounter = () => {
    setCounterState(counterState => counterState + 1);
  };
  const decrementCounter = () => {
    if (counterState === 0) return;
    setCounterState(counterState => counterState - 1);
  };

  useEffect(() => {
    setInterval(() => {
      setCounterState(counterState => counterState + 100);
    }, Math.ceil(Math.random()*800));
  }, []);

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
