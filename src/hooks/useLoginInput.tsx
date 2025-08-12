import { useState } from "react";

export default function useLoginInput(
  initialValue = "",
  validFn: (value: string) => string | undefined
) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || "");
    setError(validFn(e.target.value) || "");
  };
  return {
    value,
    handleValueChange,
    error,
  };
}
