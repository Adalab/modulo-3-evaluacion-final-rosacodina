import '../styles/App.scss';
import { useState, useEffect } from 'react';

import getApiData from '../services/moviesApi'; //I can name this import as I prefer
import MovieList from './MovieList';
import Filters from './Filters';
import MovieFilter from './MovieFilter';

function App() {
  /*FETCH*/
  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  //VARIABLES//

  /*API data*/
  const [dataMovies, setDataMovies] = useState([]);

  /*To filter by movie*/
  const [movieFilter, setMovieFilter] = useState('');

  /*Function to modify the state variable of MovieFilter*/
  const handleMovieFilter = (value) => {
    setMovieFilter(value);
  };

  /*To take the filtered data*/
  const userFilters = dataMovies.filter((movie) => {
    /*if (movieFilter === '') {
      return true;
    } else {
      return movie.name === movieFilter;
    }*/

    //Ternary, it is the same as the previous conditional
    return movieFilter === '' ? true : movie.title.includes(movieFilter);
  });

  /*Function to get the films years from the API, so I have to create a new array*/
  const getYear = () => {
    const movieYear = dataMovies.map((movie) => movie.year);
    /*Function to avoid repeated years*/
    const uniqueYear = movieYear.filter((year, index) => {
      return movieYear.indexOf(year) === index;
    });
    return uniqueYear;
  };

  //--------------------------------------------------//
  return (
    <>
      <h1 className="header_title">Owen Wilson's "wow" films</h1>

      <MovieList movies={userFilters} />
      <Filters
        handleMovieFilter={handleMovieFilter}
        movieFilter={movieFilter}
        getYear={getYear()}
      />
    </>
  );
}

export default App;
