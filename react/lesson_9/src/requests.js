import axios from "axios";

export const fetchNews = async (query) => {
  const {
    data: { articles },
  } = await axios.get(
    `http://newsapi.org/v2/everything?q=${
      query ? query : "apple"
    }&from=2020-08-15&sortBy=publishedAt&apiKey=${"170f254648c146d1b4131a2ec576187a"}`
  );
  return articles;
};
