import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getApiData from '../services/moviesApi'; //I can name this import as I prefer
import MovieList from './MovieList';
import Filters from './Filters';
import MovieFilter from './MovieFilter';
import MovieCardDetail from './MovieCardDetail';

function App() {
  /*FETCH*/
  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  //STATE VARIABLES//
  /*API data*/
  const [dataMovies, setDataMovies] = useState([]);

  /*To filter by movie*/
  const [movieFilter, setMovieFilter] = useState('');

  /*State Variable to filter the years*/
  const [yearFilter, setYearFilter] = useState([]);

  //FUNCTIONS//
  /*Function to modify the state variable of MovieFilter*/
  const handleMovieFilter = (value) => {
    setMovieFilter(value);
  };

  /*Function that has the value of years I want to filter */
  const handleYearFilter = (value) => {
    setYearFilter([...yearFilter, value]);
  };

  /*To take the filtered data*/
  const userFilters = dataMovies
    .filter((movie) => {
      /*if (movieFilter === '') {
      return true;
    } else {
      return movie.name === movieFilter;
    }*/

      //Ternary, it is the same as the previous conditional
      return movieFilter === '' ? true : movie.title === movieFilter;
    })
    .filter((movie) => {
      if (yearFilter.length === 0) {
        return true;
      } else {
        return yearFilter.includes(movie.year);
      }
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

  const { pathCard } = useLocation();
  const dataPath = matchPath('/card/:movieCard', pathCard);

  const card = dataPath.params.card;
  const cardFound = dataMovies.find((item) => item.id === card);
  //--------------------------------------------------//
  return (
    <>
      <h1 className="header_title">Owen Wilson's "wow" films</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleMovieFilter={handleMovieFilter}
                movieFilter={movieFilter}
                getYear={getYear()}
                handleYearFilter={handleYearFilter}
              />
              <MovieList movies={userFilters} />
            </>
          }
        />
        <Route
          path="/card/:movieCard"
          element={<MovieCardDetail user={cardFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
