import { useContext } from "react";
import { CounterContext, CounterContextAction } from "./CounterContextAction";

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error("userCounter는 CounterProvider 안에서만 사용 가능합니다.");
  return context;
}

export function useCounterAction() {
  const context = useContext(CounterContextAction);
  if (!context)
    throw new Error(
      "useCounterAction는 CounterProvider 안에서만 사용 가능합니다."
    );
  return context;
}
