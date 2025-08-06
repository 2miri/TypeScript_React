import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const items = ["apple", "banana", "orange"];
  const [fruits, setFruits] = useState(
    items.map((item) => ({
      id: uuidv4(),
      value: item,
    }))
  );

  return (
    <>
      <h1>Fruits Lists</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setFruits((fruits) => [{ id: uuidv4(), value: "grape" }, ...fruits])
        }
      >
        추가
      </button>
    </>
  );
}
