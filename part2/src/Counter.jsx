import React, { useState, useEffect, useRef } from "react";

export const Counter = () => {
  const initialCount = JSON.parse(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);
  const [isDark, setIsDark] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const swapTheme = () => {
    setIsDark(!isDark);
  };

  const increase = () => {
    if (inputRef.current.value !== "") {
      setCount(count + Number(inputRef.current.value));
    } else {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (inputRef.current.value !== "") {
      setCount(count - Number(inputRef.current.value));
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const theme = isDark ? "bg-dark" : "bg-white";

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <h1>This is the Counter!</h1>
      <p>{count}</p>
      <div>
        <button onClick={swapTheme}>THEME</button>
        <button onClick={increase} className={theme}>
          INCREASE
        </button>
        <button onClick={decrease} className={theme} ref={buttonRef}>
          DECREASE
        </button>
        <button onClick={reset} className={theme}>
          RESET
        </button>
        <input
          type="number"
          ref={inputRef}
          placeholder="Do you want to use a custom number?"
        ></input>
      </div>
    </>
  );
};
