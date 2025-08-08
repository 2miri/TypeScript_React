import { useState } from "react";

export default function Textarea() {
  const [formState, setFormState] = useState({
    desc: "",
    intro: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: [e.target.value],
    }));
  };

  return (
    <div>
      <textarea
        className="border"
        name="desc"
        value={formState.desc}
        onChange={handleFormChange}
      />
      <p>입력된 텍스트 : {formState.desc}</p>

      <textarea
        className="border"
        name="intro"
        value={formState.intro}
        onChange={handleFormChange}
      />
      <p>입력된 텍스트 : {formState.intro}</p>
    </div>
  );
}
