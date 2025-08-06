import { useState } from "react";

export default function FruitList() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  function handleItemAdd() {
    setItems((items) => [...items, "포도"]);
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleItemAdd} disabled={items.includes("포도")}>
        과일 추가
      </button>
    </>
  );
}
