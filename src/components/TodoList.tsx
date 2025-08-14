import { useSelector } from "react-redux";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import type { RootState } from "../store/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo);
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때 */}
        {todos.length === 0 && <TodoListEmpty />}

        {/* 할 일 목록이 있을 때 */}
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
