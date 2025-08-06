import type { ActionDispatch } from "react";

export default function CountButton({
  countDispatch,
}: {
  countDispatch: ActionDispatch<[action: { type: string }]>;
}) {
  return (
    <>
      <button onClick={() => countDispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
