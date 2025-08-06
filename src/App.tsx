import { useReducer } from "react";
import counterReducer from "./reducer/counterReducer";

export default function App() {
  const [count, countDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>
    </>
  );
}
