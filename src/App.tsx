import UserSettings from "./components/UserSettings";
import SettingProdiver from "./context/setting/SettingProdiver";

export default function App() {
  return (
    <>
      <SettingProdiver>
        <UserSettings />
      </SettingProdiver>
    </>
  );
}
