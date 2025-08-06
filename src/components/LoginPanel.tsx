import { useState } from "react";

export default function LoginPanel() {
  const [isLogin, setIsLogin] = useState(false);
  const view = isLogin ? (
    <>
      <h1>환영합니다! 🎉</h1>
      <button onClick={() => setIsLogin((isLogin) => !isLogin)}>
        로그아웃
      </button>
    </>
  ) : (
    <>
      <h1>로그인이 필요합니다. 🔐</h1>
      <button onClick={() => setIsLogin((isLogin) => !isLogin)}>로그인</button>
    </>
  );
  return <>{view}</>;
}
