import { useContext, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const providerObj = {};
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
