import { useContext } from "react";
import { TodoContext, TodoContextAction } from "./TodoContext";

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useTodo - TodoProvider 안에서만 사용 가능합니다.");
  return context;
};

export const useTodoAction = () => {
  const context = useContext(TodoContextAction);
  if (!context)
    throw new Error("useTodoAction - TodoProvider 안에서만 사용 가능합니다.");
  return context;
};
