import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';


const Estados = () => {
  const [estado, setEstado] = useState({});

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => setEstado(res));
  }, []);

  return(
    <div>
      {typeof estado.results === 'undefined' ? (
        <div>Cargando</div>
      ) : (
        <ul>
          {estado.results.map((character) => {
            const id = character.url.split('/')[5];
            return (
              <li>
                <Link to={`/estado/${id}`}>{character.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
    
  );

};

export default Estados;