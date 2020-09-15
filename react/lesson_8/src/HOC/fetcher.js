import React, { useEffect, useState } from "react";
import { requests } from "../requestsNews/requests";

// export function fetcher(BaseComponent) {
//   return function Fetcher(props) {
//     const [news, setNews] = useState([]);
//     const fetchNews = async () => {
//       const { data } = await axios.get(
//         `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-14&sortBy=publishedAt&apiKey=${props.apiKey}`
//       );
//       setNews(data.articles);
//     };

//     useEffect(() => {
//       fetchNews();
//     }, []);

//     return <BaseComponent data={news} />;
//   };
// }

export function fetcher(BaseComponent) {
  return class Fetcher extends React.Component {
    state = {
      news: [],
    };

    fetchNews = async () => {
      const data = await requests(this.props.apiKey).fetchNews("tesla");
      this.setState({ news: data });
    };

    componentDidMount() {
      this.fetchNews();
    }

    render() {
      console.log(this.props);
      const { news } = this.state;
      return <BaseComponent data={news} history={this.props.history} />;
    }
  };
}
