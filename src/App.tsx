import { Provider } from "react-redux";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Count />
        <CountOutside />
      </Provider>
    </>
  );
}
