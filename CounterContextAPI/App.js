import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter>
        <Counter.Count />
        <Counter.Increment icon="+" />
        <Counter.Decrement icon="-" />
      </Counter>
    </div>
  );
}
