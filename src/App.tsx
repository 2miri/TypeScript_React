import type React from "react";
import { useRef } from "react";
import Input from "./components/Input";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.focus();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} />
        {/* <input type="text" className="border" ref={inputRef} /> */}
        <button type="submit" className="border">
          제출
        </button>
      </form>
    </>
  );
}
