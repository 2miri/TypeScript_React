import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 생성될 때만 호출됩니다.
  useEffect(() => {
    console.log("카운트 컴포넌트 생성");

    // 컴포넌트가 삭제(언마운트) 될 때만 호출하는 코드는...
    return () => {
      console.log("카운트 컴포넌트 삭제");
    };
  }, []);

  // 컴포넌트의 상태가 변경 되었을 때만 호출하려면 ?
  useEffect(() => {
    console.log("count change : " + count);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
