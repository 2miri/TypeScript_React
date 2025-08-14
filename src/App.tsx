import { Provider } from "react-redux";
import UserSettings from "./components/UserSettings";
import { store } from "./store/store";
import UserSettingsAsync from "./components/UserSettingsAsync";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserSettingsAsync />
        <UserSettings />
      </Provider>
    </>
  );
}
