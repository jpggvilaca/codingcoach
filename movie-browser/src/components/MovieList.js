import React from 'react';
import PropTypes from 'prop-types';

const placeholderImg = 'https://picsum.photos/140/100';

const MovieList = props => {
  const { allMovies } = props;

  return (
    <div>
      <h3>All Movies</h3>
      {allMovies.map(movie => (
        <div key={movie.id}>
          <li>{movie.title}</li>
          <li>
            <img src={placeholderImg} alt="placeholder" />
          </li>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  allMovies: PropTypes.array,
};

export default MovieList;
