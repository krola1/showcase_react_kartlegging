import { useState } from "react";
import { useContext, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [list, setList] = useLocalStorage("kartlegging", []);

  const addItem = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      title: text,
      done: false,
    };

    setList((prevTodo) => [...prevTodo, newTodo]);
  };

  //-------------------------------------------------
  const providerObj = { list, addItem };
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
