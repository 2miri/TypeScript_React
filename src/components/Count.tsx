import { useState } from "react";

import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

export default function Count() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    setCount((count) => count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <CountDisplay count={count} />
      <CountButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
}
