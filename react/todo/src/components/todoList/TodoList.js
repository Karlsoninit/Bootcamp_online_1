import React from "react";

export function TodoList({ todos }) {
  console.log("todos", todos);
  console.log(Object.keys(todos).map((key) => ({ ...todos[key], id: key })));
  return <></>;
}
