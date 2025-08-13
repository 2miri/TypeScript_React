import { lazy, useState } from "react";
// import ChildA from "./components/ChildA";
// import ChildB from "./components/ChildB";
const ChildA = lazy(() => import("./components/ChildA"));
const ChildB = lazy(() => import("./components/ChildB"));

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      <h1>App Component</h1>
      {isShow && (
        <>
          <ChildA />
          <ChildB />
        </>
      )}
    </>
  );
}
