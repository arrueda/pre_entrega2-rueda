import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CompactosId = () =>{
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setPersonaje);

  }, [id])

  return(
    <dir>
      <p>Soy Compactos ID: muestra del personaje Nro {id}</p>
      <img src={personaje.image} alt='Imagen de ${personaje.name}' />
      {<p>Nombre: { personaje.name }</p>}
    </dir>
  )
};

export default CompactosId;