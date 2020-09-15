import React from "react";
import { FireButton } from "../../ui/FireButton";

export function TodoList({ todos, deleteTodo }) {
  console.log("todos", todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h2>{todo.todo}</h2>
          <FireButton label="DELETE" handleClick={() => deleteTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
}
