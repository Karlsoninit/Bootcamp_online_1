import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { fetchNews } from "../../requests";
import { ArticleCard } from "../../ui/ArticleCard";
import { Search } from "../search/Search";

export default function News() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  const history = useHistory();
  const location = useLocation();

  const searchParam = queryString.parse(location.search);

  useEffect(() => {
    (async () => {
      const data = await fetchNews(searchParam.query);
      setNews(data);
    })();
    if (searchParam.query) {
      setQuery(searchParam.query);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchNews(query);
      setNews(data);
    })();
  }, [query]);

  const lernMoreHandler = (id) => {
    history.push({
      pathname: `/news/${id}`,
      search: `?query=${query}`,
    });
  };

  const getSearchQuery = (query) => {
    setQuery(query);
    history.push({
      pathname: `/news/`,
      search: `?query=${query}`,
    });
  };

  const generateKey = () => {};

  return (
    <>
      <button onClick={generateKey}>ceate new api key</button>
      <Search getSearchQuery={getSearchQuery} />
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {news.map((article) => (
          <ArticleCard data={article} lernMoreHandler={lernMoreHandler} />
        ))}
      </ul>
    </>
  );
}
