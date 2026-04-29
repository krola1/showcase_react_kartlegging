import { useState } from "react";
import { useContext, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      id: crypto.randomUUID(),
      // eslint-disable-next-line react-hooks/purity
      createdAt: Date.now(),
      title: "Fisk",
      done: false,
    },
  ]);

  const providerObj = { list };
  return (
    <TodoContext.Provider value={providerObj}>{children}</TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useContext must be used within a provider");
  }
  return context;
};
