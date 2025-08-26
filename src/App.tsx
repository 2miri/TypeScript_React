import { useActionState } from "react";

export default function App() {
  const [count, formAction, isPending] = useActionState(
    async (count: number, formData: FormData) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const amount = Number(formData.get("amount"));
      return count + amount;
    },
    0
  );
  return (
    <>
      <form>
        <h1>Count : {count}</h1>
        <input type="number" name="amount"></input>
        <button type="submit" disabled={isPending} formAction={formAction}>
          증가
        </button>
        {isPending && <p>제출중...</p>}
      </form>
    </>
  );
}
