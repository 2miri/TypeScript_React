import { useCallback, useState } from "react";
import ChildA from "./components/ChildA";

export default function App() {
  console.log("app");
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <ChildA increment={increment} />
    </>
  );
}
