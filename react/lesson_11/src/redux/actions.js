import { GET_FORM_VALUE, DELETE_TODO } from "./types";

export const getFormValue = (data) => ({
  type: GET_FORM_VALUE,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
