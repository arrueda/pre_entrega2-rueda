import React from "react";
import BrowserRouter from 'react-router-dom';
import { Link } from 'react-router-dom';
import Estados from "../Rutes/Estados/Estados";
import Compactos from "../Rutes/Compactos/Compactos";

const RmNavbar = () => {
 
  return (
    <nav className="navbar navbar-dark bg-dark">
      <dir className="container">
        <a className="navbar-brand" href="/">Rick & Morty</a>
      </dir>
      <dir>
      <React.Fragment>
        <ul>
        <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./Estados">Estados</Link>
          </li>
          <li>
            <Link to="./Compactos">Compactos</Link>
          </li>
        </ul>


      </React.Fragment>
      </dir>
    </nav>
  )
};

export default RmNavbar;