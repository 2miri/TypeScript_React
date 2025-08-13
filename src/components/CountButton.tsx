import { useCounterAction } from "../context/counter/useCounter";

export default function CountButton() {
  console.log("CountButton");

  const countDispatch = useCounterAction();
  return (
    <>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>
    </>
  );
}
