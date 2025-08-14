import Todo from "./components/Todo";
import TodoProvider from "./context/todo/TodoProvider";

export default function App() {
  return (
    <>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </>
  );
}
