import { Provider } from "react-redux";
import UserSettings from "./components/UserSettings";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserSettings />
      </Provider>
    </>
  );
}
