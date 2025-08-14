import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  reset,
} from "../store/features/counter/counterSlice";
import type { AppDispatch } from "../store/store";

export default function CountButton() {
  console.log("CountButton");

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement(5))}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment({ num1: 5, num2: 3 }))}>
        증가
      </button>
      <button onClick={() => dispatch(incrementAsync(10))}>증가2</button>
    </>
  );
}
