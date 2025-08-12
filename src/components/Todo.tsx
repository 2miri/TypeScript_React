import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };
  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록 */}
        <TodoEditor addTodo={addTodo} />
        {/* 할 일 목록 */}
        <TodoList />
      </div>
    </>
  );
}
