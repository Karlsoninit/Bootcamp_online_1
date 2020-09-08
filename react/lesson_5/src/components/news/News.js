import React from "react";
import axios from "axios";
import { Search } from "../search/Search";
import { NewsList } from "../newsList/NewsList";

axios.defaults.baseURL = "http://newsapi.org/v2";

export class News extends React.Component {
  state = {
    query: "",
    news: [],
  };

  getNews = async (query = "apple") => {
    try {
      const news = await axios.get(
        `/everything?q=${query}&from=2020-08-08&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      this.setState({ news: news.data.articles });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getNews(this.state.query);
    }
  }

  getQuery = (query) => {
    this.setState({ query });
  };

  render() {
    const { news } = this.state;
    return (
      <>
        <Search getQuery={this.getQuery} />
        <NewsList data={news} />
      </>
    );
  }
}
