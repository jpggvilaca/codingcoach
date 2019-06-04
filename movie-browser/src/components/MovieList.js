import React, { Component } from 'react';
import axios from 'axios';

const URL = 'https://ghibliapi.herokuapp.com/films';

class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(res => {
        this.setState({
          movies: res.data,
        });
      })
      .catch(err => {
        console.log(err); // log the error?
      });
  }

  render() {
    const { movies } = this.state;
    console.log('movies', movies);
    return <div>Display All Movies</div>;
  }
}

export default MovieList;
