import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { list } = useTodo();

  return (
    <>
      {list.map((item) => (
        <TodoItem {...item} />
      ))}
    </>
  );
}
