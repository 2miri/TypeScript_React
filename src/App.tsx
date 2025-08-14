import { Provider } from "react-redux";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";
import { store } from "./store/store";
import Theme from "./components/Theme";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Count />
        <CountOutside />
        <Theme />
        <ThemeButton />
      </Provider>
    </>
  );
}
