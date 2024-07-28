export default function Characters(props) {

    const { characters, setCharacters } = props;
    
    // Vaceamos el arreglo de personajes
    const resetCharacters = () => {
        setCharacters(null);
    }

    return(
        <div className="characters">
            <h1>Personajes</h1>

            <button className="btn-home" onClick={resetCharacters}>Volver al inicio</button>

            <div className="container-characters">
                { characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div className="character-info">
                            <h3>{character.name}</h3>
                            <p>
                                <span className="text-gray">Estado: </span>{character.status === "Alive" ? 
                                (
                                    <>
                                        Alive <span className="alive"></span> 
                                    </>
                                ) : (
                                    <>
                                        Dead <span className="dead"></span>
                                    </>
                                )}
                            </p>
                            <p>
                                <span className="text-gray">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                            <p>
                                <span className="text-gray">Género: </span>
                                <span>{character.gender}</span>
                            </p>
                            <p>
                                <span className="text-gray">Origen: </span>
                                <span>{character.origin.name}</span>
                            </p>
                            <p>
                                <span className="text-gray">Episodios en los que aparece: </span>
                                <span>{character.episode.length}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}