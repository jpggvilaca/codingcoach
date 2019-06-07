import React, { Component } from 'react';
import MovieList from './components/MovieList';
import { fetchData } from './api';

const URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchData(URL)
      .then(res => {
        this.setState({
          movies: res,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Movie Browser</h1>
        <MovieList allMovies={movies} />
      </div>
    );
  }
}

export default App;
