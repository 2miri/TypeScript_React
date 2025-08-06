import { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const handleAddFruit = () => {
    // melon 추가
    // setFruits((fruits) => [...fruits, "melon"]);

    // apple을 grape로 변경
    // setFruits((fruits) =>
    //   fruits.map((fruit) => (fruit === "apple" ? "grape" : fruit))
    // );

    // 두번째에 grape 추가
    setFruits((fruits) => [...fruits.slice(0, 1), "grape", ...fruits.slice(1)]);
  };
  return (
    <>
      <p>{fruits.join(", ")}</p>
      <button onClick={handleAddFruit}>Add Fruit</button>
    </>
  );
}
