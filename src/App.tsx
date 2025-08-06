import Inline from "./components/Inline";

// 인라인 스타일 방법
export default function App() {
  const isLogin = true;
  const h1Style = { color: isLogin ? "red" : "blue", fontSize: "25px" };
  return (
    <>
      <Inline h1Style={h1Style} />
    </>
  );
}
