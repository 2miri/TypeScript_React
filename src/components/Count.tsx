import { useReducer } from "react";
import counterReducer from "../reducer/counterReducer";

import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

export default function Count() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <CountDisplay count={count} />
      <CountButton countDispatch={countDispatch} />
    </>
  );
}
