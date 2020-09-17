import React from "react";

import TodoListItem from "../todoListItem/TodoListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect, useSelector } from "react-redux";
import styles from "./todoList.module.css";

export function TodoList() {
  const { todos } = useSelector((state) => state);

  return (
    <TransitionGroup component={"ul"}>
      {todos.map((todo, id) => (
        <CSSTransition key={id} timeout={2000} classNames={styles}>
          <TodoListItem {...todo} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

// const mSTP = (state) => ({
//   todos: state.todos,
// });

// export default connect(mSTP, null)(TodoList);
// export default TodoList;
