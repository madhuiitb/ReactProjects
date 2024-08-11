import { useEffect, useState } from 'react';
import signalConfiguration from './Constants';
import './App.css'

const App = ()=> {

  const [signal, setSignal] = useState('red');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSignal(signalConfiguration[signal].nextSignal);
    }, signalConfiguration[signal].duration);

    // To avoid the memory leak
    return () => clearTimeout(timeoutId);

  }, [signal]);

  return (
      <div className="app">
        <h3> Hello, World!</h3>
        <div className="traffic">
          <div className={`red light ${signal === "red" ? "active" : ""}`}></div>
          <div
            className={`yellow light ${signal === "yellow" ? "active" : ""}`}
          ></div>
          <div
            className={`green light ${signal === "green" ? "active" : ""}`}
          ></div>
        </div>
      </div>
  );
}

export default App
