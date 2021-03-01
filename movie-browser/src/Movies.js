import axios from 'axios';
import React from 'react';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

const Movies = () => {
  let [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ghibliapi.herokuapp.com/films');

      if (result && result.data) {
        setData({ data: result.data });
      }
    };
    fetchData();
  }, []);

  //   console.log(data);

  //   return <MovieCard data={data} />;
  return (
    <div>
      {data.data.map((item) => {
        return <MovieCard key={item.id} data={data} />;
      })}
    </div>
  );
};

export default Movies;
