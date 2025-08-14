import type React from "react";
import { TodoContext, TodoContextAction } from "./TodoContext";
import { useEffect, useMemo, useState } from "react";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState<Todo[]>(
    savedTodos ? JSON.parse(savedTodos) : []
  );

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

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const modifyTodo = (id: number, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const memoization = useMemo(
    () => ({
      addTodo,
      toggleTodo,
      deleteTodo,
      modifyTodo,
    }),
    []
  );
  return (
    <>
      <TodoContextAction value={memoization}>
        <TodoContext value={{ todos }}>{children}</TodoContext>
      </TodoContextAction>
    </>
  );
}
