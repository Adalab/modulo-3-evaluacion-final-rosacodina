// import sirve para enlazar /traer las dependencias que necesitamos.
// Librerías JS
// CSS
// Imágenes
// JSON

import '../styles/App.scss';
import getApiData from '../services/moviesApi'; //I can name this import as I prefer
import { useEffect } from 'react';

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
    // Como solo se puede devolver una etiqueta, se puede usar una etiqueta ficticia vacia, llamada FRAGMENTO, y que se escribe, abiriendo y cerrando la etiqueta vacia, así "<> html </>".
    <>
      <h1 className="header__title">Owen Wilson's "wow" films</h1>
    </>
  );
}

export default App;
