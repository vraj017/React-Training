// SearchNews.js
import React, { Component } from 'react';
import axios from 'axios';

class SearchNews extends Component {
  state = {
    query: '',
    loading: false,
    searchResults: []
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    if (query.trim() !== '') {
      this.setState({ loading: true });
      axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=689e29b762df4168bff8004aea3874e0`)
        .then(response => {
          this.setState({
            searchResults: response.data.articles,
            loading: false
          });
        })
        .catch(error => {
          console.error('Error fetching news:', error);
          this.setState({ loading: false });
        });
    }
  };

  render() {
    const { query, loading, searchResults } = this.state;

    return (
        <>
       <center> <b><h2>All News</h2></b></center>
        <hr />
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={this.handleChange}
              placeholder="Search news"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        </form>
        {searchResults.length > 0 &&
          <div>
            <h2>Search Results</h2>
            <div className="row">
              {searchResults.map((article, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card">
                    <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
      </>
    );
  }
}

export default SearchNews;
