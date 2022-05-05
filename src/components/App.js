import '../styles/App.scss';
import { useState, useEffect } from 'react';

import getApiData from '../services/moviesApi'; //I can name this import as I prefer
import MovieList from './MovieList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataClean) => {
      console.log(dataClean);
      setDataMovies(dataClean);
    });
  }, []);

  return (
    <>
      <h1 className="header_title">Owen Wilson's "wow" films</h1>

      <MovieList movies={dataMovies} />
    </>
  );
}

export default App;
