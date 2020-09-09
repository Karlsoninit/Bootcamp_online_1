import axios from "axios";

export const sendData = async (data) => {
  try {
    await axios.post(`https://news-9cced.firebaseio.com/todo.json`, data);
  } catch (e) {
    console.log(e);
  }
};
export const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://news-9cced.firebaseio.com/todo.json`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteTodo = (id) => {
  try {
  } catch (e) {
    console.log(e);
  }
};
