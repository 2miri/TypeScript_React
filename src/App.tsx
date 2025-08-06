import { useState } from "react";
import LoginStatus from "./components/LoginStatus";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  function handleLogin() {
    setIsLogin(true);
  }
  function handleLogout() {
    setIsLogin(false);
  }
  return (
    <>
      <LoginStatus
        isLogin={isLogin}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </>
  );
}
