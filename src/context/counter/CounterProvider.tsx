import type React from "react";
import { useReducer } from "react";
import { CounterContextAction, CounterContext } from "./CounterContextAction";
import counterReducer from "../../reducer/counterReducer";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, countDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <CounterContextAction value={countDispatch}>
        <CounterContext value={{ count }}>{children}</CounterContext>
      </CounterContextAction>
    </>
  );
}
