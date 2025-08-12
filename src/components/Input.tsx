import type { RefObject } from "react";

export default function Input({
  ref,
}: {
  ref: RefObject<HTMLInputElement | null>;
}) {
  return (
    <>
      <input type="text" className="border" ref={ref} />
    </>
  );
}
