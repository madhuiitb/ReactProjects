// 1. create contex
// 2. create parent
// 3. Create child components to help implementing the common tasks
// 4. Add child components as properties to the parent component
import { createContext, useState, useContext } from "react";

// 1. create contex
const CounterContext = createContext();

// 2. create parent
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
};

// 3. Create child components to help implementing the common tasks
const Count = () => {
  const { count } = useContext(CounterContext);
  return <div>{count}</div>;
};

const Increment = ({ icon }) => {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
};

const Decrement = ({ icon }) => {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
};
// 4. Add child components as properties to the parent component 
//(Counter is a function in JS so we can assign any objects, values, functions etc..)
Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
