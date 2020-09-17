import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/actions";

function TodoListItem({ todo, id, deleteTodo }) {
  return (
    <li>
      <h2>{todo}</h2>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
}

export default connect(null, { deleteTodo })(TodoListItem);
