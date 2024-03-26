import React, { Component } from 'react';
import axios from 'axios'; 
import NewsCard from './NewsCard'; 


class AllNews extends Component {
  state = {
    news: [],
    loading: true
  };

  componentDidMount() {
    this.loadNews();
  }

  loadNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-03-25&to=2024-03-25&sortBy=popularity&apiKey=689e29b762df4168bff8004aea3874e0")
      .then(response => {
        this.setState({
          news: response.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { news, loading } = this.state;

    return (
      <div className="container">
       <center> <b><h2>All News</h2></b></center>
        <hr />
        {loading ? <p>Loading...</p> :
          <div className="row">
            {news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        }
      </div>
    );
  }
}

export default AllNews;