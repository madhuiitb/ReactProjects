import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    if (start) {
      counterRef.current = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    () => {
      clearTimeout(counterRef.current);
    };
  }, [count, start]);
  return (
    <div className="App">
      <h1 className="counter">Counter: {count} </h1>
      <div className="buttons">
        <button
          className="start"
          onClick={() => {
            setStart(true);
          }}
        >
          Start
        </button>
        <button
          className="pause"
          onClick={() => {
            setStart(false);
            clearTimeout(counterRef.current);
          }}
        >
          Pause
        </button>
        <button
          className="clear"
          onClick={() => {
            setCount(0);
            clearTimeout(counterRef.current);
            setStart(false);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
