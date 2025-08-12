import { useState } from "react";

export default function Radio() {
  const [formState, setFormState] = useState({
    option: "option1",
    colorOption: "option1",
  });
  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={formState.option === "option1"}
            onChange={handleFormStateChange}
          />
          옵션 1
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            checked={formState.option === "option2"}
            onChange={handleFormStateChange}
          />
          옵션 2
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="option3"
            checked={formState.option === "option3"}
            onChange={handleFormStateChange}
          />
          옵션 3
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="colorOption"
            value="option1"
            checked={formState.colorOption === "option1"}
            onChange={handleFormStateChange}
          />
          컬러 옵션 1
        </label>
        <label>
          <input
            type="radio"
            name="colorOption"
            value="option2"
            checked={formState.colorOption === "option2"}
            onChange={handleFormStateChange}
          />
          컬러 옵션 2
        </label>
        <label>
          <input
            type="radio"
            name="colorOption"
            value="option3"
            checked={formState.colorOption === "option3"}
            onChange={handleFormStateChange}
          />
          컬러 옵션 3
        </label>
      </div>
    </section>
  );
}
