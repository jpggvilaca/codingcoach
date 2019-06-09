import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Button from './components/Button';
import { fetchData } from './api';

const URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
  state = {
    movies: [],
    showMovies: false,
    buttonText: 'Show Movies', // no movies displaying on initial render
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

  handleShowMovies = () => {
    const { showMovies } = this.state;

    this.setState({
      showMovies: !this.state.showMovies,
      buttonText: showMovies ? 'Show Movies' : 'Hide Movies',
    });
  };

  render() {
    const { movies, buttonText, showMovies } = this.state;

    return (
      <div>
        <h1>Movie Browser</h1>
        <Button buttonName={buttonText} onClick={this.handleShowMovies} />
        {showMovies && <MovieList allMovies={movies} />}
      </div>
    );
  }
}

export default App;
