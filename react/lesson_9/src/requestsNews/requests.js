import axios from "axios";

export const requests = (key) => {
  const fetchNews = async (query) => {
    const {
      data: { articles },
    } = await axios.get(
      `http://newsapi.org/v2/everything?q=${query}&from=2020-08-14&sortBy=publishedAt&apiKey=${key}`
    );
    return articles;
  };
  return { fetchNews };
};
