import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/moviesApi'; //I can name this import as I prefer

// Función principal.
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
      <h1 className="header__title">Owen Wilson's "wow" films</h1>
    </>
  );
}

export default App;
