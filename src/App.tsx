import { useState } from "react";

export default function App() {
  const [name, setName] = useState("jack");
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState("male");

  function handleClick() {
    setName("mike");
    setAge(30);
    setGender("female");
  }

  return (
    <>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>gender : {gender}</p>
      <button onClick={handleClick}>Update Profile</button>
    </>
  );
}
