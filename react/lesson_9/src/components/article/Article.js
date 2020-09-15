import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import queryString from "query-string";
import { fetchNews } from "../../requests";

export default function Article() {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  console.log("match", match);

  console.log("location", location);

  const { query } = queryString.parse(location.search);

  useEffect(() => {
    (async () => {
      const data = await fetchNews(query);
      const article = data.find((article) => article.publishedAt === articleId);
      setArticle(article);
    })();
  }, []);

  const goBack = () => {
    history.push({
      pathname: `/news/`,
      search: `?query=${query}`,
    });
  };
  return (
    <div>
      <img alt="news" src={article.urlToImage} />
      <p>{article.content}</p>
      <button onClick={goBack}>go back</button>
    </div>
  );
}
