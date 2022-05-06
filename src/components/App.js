import '../styles/App.scss';
import { useState, useEffect } from 'react';

import getApiData from '../services/moviesApi'; //I can name this import as I prefer
import MovieList from './MovieList';
import Filters from './Filters';
import MovieFilter from './MovieFilter';

function App() {
  useEffect(() => {
    getApiData().then((dataClean) => {
      console.log(dataClean);
      setDataMovies(dataClean);
    });
  }, []);

  const [dataMovies, setDataMovies] = useState([]);

  const [movieFilter, setMovieFilter] = useState('');

  //Function to modify the state variable of MovieFilter
  const handleMovieFilter = (value) => {
    setMovieFilter(value);
  };

  //To take the filtered data
  const userFilters = dataMovies.filter((movie) => {
    /*if (movieFilter === '') {
      return true;
    } else {
      return movie.name === movieFilter;
    }*/

    //Ternary, it is the same as the previous conditional
    return movieFilter === '' ? true : movie.title.includes(movieFilter);
  });

  return (
    <>
      <h1 className="header_title">Owen Wilson's "wow" films</h1>

      <MovieList movies={userFilters} />
      <Filters
        handleMovieFilter={handleMovieFilter}
        movieFilter={movieFilter}
      />
    </>
  );
}

export default App;
