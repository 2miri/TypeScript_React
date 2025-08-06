export default function App() {
  const isLogin = true;
  return (
    <>
      {isLogin && <h1>true</h1>}
      {!isLogin && <h1>false</h1>}
    </>
  );
}
