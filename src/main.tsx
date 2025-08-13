import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import SettingProdiver from "./context/setting/SettingProdiver.tsx";
// import "./styles/todo.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingProdiver>
      <App />
    </SettingProdiver>
  </StrictMode>
);
