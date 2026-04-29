import { useTodo } from "../context/TodoContext";

export default function TodoList() {
  const { list } = useTodo();

  return (
    <>
      {list.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
}
