import type React from "react";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email");
    const pw = formData.get("pw");

    // api
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log(`login success : ${email}/${pw}`);
  }
  return (
    <>
      <form action={handleSubmit}>
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" />
        <button type="submit" disabled={isLoading}>
          로그인
        </button>
      </form>
    </>
  );
}
