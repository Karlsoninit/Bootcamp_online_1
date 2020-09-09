import React, { useState, useEffect } from "react";
import { Form } from "../form/Form";
import { TodoList } from "../todoList/TodoList";
import { getData } from "../../requests";

export function ToDo() {
  const [todos, setTodos] = useState([]);
  const [updateTodos, setUpdateTodos] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setTodos(data);
    })();
  }, []);
  useEffect(() => {
    console.log("update toodos");
    setUpdateTodos(true);
    setTimeout(() => {
      setUpdateTodos(false);
    }, 4000);
  }, [todos]);
  const uploadData = (data) => {
    setTodos(data);
  };
  return (
    <>
      {updateTodos && <h2>у вас новая задача</h2>}
      <Form uploadData={uploadData} />
      <TodoList todos={todos} />
    </>
  );
}
