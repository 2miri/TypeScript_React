import { useRef } from "react";

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    console.log(pwRef.current?.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border" ref={inputRef} />
        <input type="password" className="border" ref={pwRef} />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </>
  );
}
