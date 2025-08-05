import { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
  });

  const handleUpdateUserInfo = () => {
    // 객체의 일부만 변경시
    // setUserInfo((userInfo) => ({
    //   ...userInfo,
    //   name: "mike",
    // }));

    // 모든 값을 업데이트가 확실할때
    setUserInfo({
      name: "mike",
      age: 30,
      gender: "female",
    });
  };
  return (
    <>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
    </>
  );
}
