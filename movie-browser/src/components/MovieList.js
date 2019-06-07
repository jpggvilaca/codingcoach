import React from 'react';

const placeholderImg = 'https://picsum.photos/140/100';

const MovieList = props => {
  return (
    <div>
      <h3>All Movies</h3>
      {props.allMovies.map(movie => (
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

export default MovieList;
