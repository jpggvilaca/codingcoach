import React from 'react';
import FeatureMovie from './components/FeatureMovie/FeatureMovie';
import TrendingMovies from './components/TrendingMovies/TrendingMovies';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';

const App = () => {
	return (
		<div>
			<h1>Movie Browser</h1>
			<FeatureMovie />
			<TrendingMovies />
			<DisplayMovies />
		</div>
	);
};

export default App;
