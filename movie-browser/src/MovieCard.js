import React from 'react';

const MovieCard = (props) => {
  const { title, description } = props;
  console.log(props);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
