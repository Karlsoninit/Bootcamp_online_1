import axios from "axios";
import { tranformResponseFB } from "./helpers";

axios.defaults.baseURL = "https://news-9cced.firebaseio.com";

export const sendData = async (data) => {
  try {
    await axios.post(`/todo.json`, data);
  } catch (e) {
    console.log(e);
  }
};

export const getData = () => {
  return axios.get(`/todo.json`).then((res) => {
    return tranformResponseFB(res.data);
  });
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`/todo/${id}.json`);
  } catch (e) {
    console.log(e);
  }
};
