import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Button from './components/Button';
import { fetchData } from './api';

const URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
  state = {
    movies: [],
    toggleMovies: 'false',
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

  handleToggleMovies = () => {
    if (!this.state.toggleMovies) {
      this.buttonText = 'Show Movies';
    } else {
      this.buttonText = 'Hide Movies';
    }

    this.setState({
      toggleMovies: !this.state.toggleMovies,
      buttonText: this.buttonText,
    });
  };

  render() {
    const { movies, buttonText, toggleMovies } = this.state;

    return (
      <div>
        <h1>Movie Browser</h1>
        <Button buttonName={buttonText} onClick={this.handleToggleMovies} />
        {!toggleMovies && <MovieList allMovies={movies} />}
      </div>
    );
  }
}

export default App;
