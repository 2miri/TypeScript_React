import { useState } from "react";

export default function App() {
  // 초기 데이터를 설정합니다.
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Tomato", category: "Vegetable" },
  ]);

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>items list</h1>
      <ul>
        {items
          // .filter((item) => item.category === "Vegetable")
          .map((item) => {
            return (
              <li key={item.id}>
                {item.category} - {item.name}
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
