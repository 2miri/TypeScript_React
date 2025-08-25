import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { useTodoStore } from "../store/todoStore";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
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
