import { useState } from 'react';
import './App.css';

// Importar la imagen
import imgRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';

function App() {

  const [ characters, setCharacters ] = useState(null);

  const reqApi = async () => {

    // Realizamos la solicitud a la API de Rick y Morty (Personajes)
    const api = await fetch("https://rickandmortyapi.com/api/character");

    // Convertimos la respuesta en un objeto JSON
    const personajesApi = await api.json();

    // Obtenemos el arreglo de personajes
    setCharacters(personajesApi.results);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        { characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imgRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
