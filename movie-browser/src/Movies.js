import axios from 'axios';
import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

const Movies = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ghibliapi.herokuapp.com/films');

      if (result && result.data) {
        setData(result.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <MovieCard key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Movies;
