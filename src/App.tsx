import { useState } from "react";
import useInput from "./hooks/useInput";

export default function App() {
  const { value: email, handleValueChange: handleEmailChange } = useInput("");
  const { value: password, handleValueChange: handlePasswordChange } =
    useInput("");
  const { value: name, handleValueChange: handleNameChange } = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, name });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          className="border"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          className="border"
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          className="border"
        />
        <button type="submit" className="border">
          제출
        </button>
      </form>
    </>
  );
}
