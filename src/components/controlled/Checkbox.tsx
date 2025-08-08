import { useState } from "react";

export default function Checkbox() {
  const [formState, setFormState] = useState({
    chk1: false,
    chk2: false,
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => {
      return {
        ...formState,
        [e.target.name]: e.target.checked,
      };
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="item1"
        checked={formState.chk1}
        onChange={handleFormChange}
        name="chk1"
      />
      <label htmlFor="item1">
        아이템 1 ({formState.chk1 ? "선택함" : "선택안함"})
      </label>

      <input
        type="checkbox"
        id="item2"
        checked={formState.chk2}
        onChange={handleFormChange}
        name="chk2"
      />
      <label htmlFor="item2">
        아이템 2 ({formState.chk2 ? "선택함" : "선택안함"})
      </label>
    </div>
  );
}
