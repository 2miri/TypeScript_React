import { useCounterAction } from "../context/counter/useCounter";

export default function CountButton() {
  console.log("CountButton");

  const { decrement, reset, increment } = useCounterAction();
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
