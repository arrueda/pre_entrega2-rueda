import React from "react";

const RickiMortiPersonajes = ({ personajes }) =>{
  return(
    <div className="row">
      {
        personajes.map((item, index) => (
          <div key={index} className="col mb-3">
            <div className="card">
              <img src={item.image} alt='Imagen de' />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))
      }


    </div>
  )  
};

export default RickiMortiPersonajes;