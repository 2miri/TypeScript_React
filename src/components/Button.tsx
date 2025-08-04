import type React from "react";

// React.ReactElement - JSX 요소만 가능
// React.ReactNode  - 문자열 포함 더 범용적인 노드
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
