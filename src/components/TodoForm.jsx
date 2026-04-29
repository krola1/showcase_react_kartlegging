import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");

  const { addItem } = useTodo();

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button>Add</button>
      <button>Delete All</button>
    </form>
  );
}
