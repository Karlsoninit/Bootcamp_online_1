import React, { useState, useEffect } from "react";
import { Form } from "../form/Form";
import { TodoList } from "../todoList/TodoList";
import { getData, deleteTodo } from "../../requests";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { toggle } from "../../HOC/toggle";

function ToDo(props) {
  console.log("props todo", props);
  const h = useHistory();
  console.log("h", h);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setTodos(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const uploadData = (data) => {
    setTodos(data);
  };

  const deleteT = async (id) => {
    await deleteTodo(id);
    const data = await getData();
    setTodos(data);
  };

  return (
    <>
      {/* {updateTodos && <h2>у вас новая задача</h2>} */}
      <Form uploadData={uploadData} />
      <TodoList todos={todos} deleteTodo={deleteT} />
    </>
  );
}

export default toggle(ToDo);
