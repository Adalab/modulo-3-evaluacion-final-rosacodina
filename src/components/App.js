// import sirve para enlazar /traer las dependencias que necesitamos.
// Librerías JS
// CSS
// Imágenes
// JSON

import '../styles/App.scss';
import getApiData from '../services/moviesApi'; //I can name this import as I prefer

// Función principal.
function App() {
  // Variables generales, constantes, variables de estado.
  // Hooks.
  // Funciones genrales, funnciones manejadoras de eventos.

  return (
    // Como solo se puede devolver una etiqueta, se puede usar una etiqueta ficticia vacia, llamada FRAGMENTO, y que se escribe, abiriendo y cerrando la etiqueta vacia, así "<> html </>".
    <>
      <body>
        <header>
          <h1 className="header__title">Owen Wilson's "wow" films</h1>
        </header>

        <main>
          <form>
            <input>Movie</input>
            <select>
              <option value="volvo">Volvo</option>
            </select>
          </form>
        </main>
      </body>
    </>
  );
}

export default App;
