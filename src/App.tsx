import { Provider } from "react-redux";
import Todo from "./components/Todo";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}
