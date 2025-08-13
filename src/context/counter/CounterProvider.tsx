import type React from "react";
import { useMemo, useState } from "react";
import { CounterContextAction, CounterContext } from "./CounterContextAction";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const memoization = useMemo(() => ({ increment, decrement, reset }), []);

  return (
    <>
      <CounterContextAction value={memoization}>
        <CounterContext value={{ count }}>{children}</CounterContext>
      </CounterContextAction>
    </>
  );
}
