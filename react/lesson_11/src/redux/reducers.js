import { GET_FORM_VALUE, DELETE_TODO } from "./types";
const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FORM_VALUE:
      return { ...state, todos: [...state.todos, payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
