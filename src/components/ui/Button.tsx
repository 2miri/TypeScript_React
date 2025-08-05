import type React from "react";

interface buttonProps {
  message: string;
  children: React.ReactNode;
  handleClick: (message: string) => void;
}

export default function Button({
  message,
  children,
  handleClick,
}: buttonProps) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
