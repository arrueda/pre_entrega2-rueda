import React, {useEffect, useState} from 'react';
import RmNavbar from '../src/Components/RickiMortiNavbar/RickiMortinNavbar'
import RickiMortiPersonajes from '../src/Components/RickiMorti/RickiMortiPersonajes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Estados from './Components/Rutes/Estados/Estados';
import Compactos from './Components/Rutes/Compactos/Compactos';
import Home from './Components/Rutes/Home/Home';
import CompactosId from './Components/Rutes/CompactosId/CompactosId';

function App() {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacter(data.results))
      .catch(error => console.log(error)) 
  }, [])

  return (
    <div className="App">
      < BrowserRouter >
        <RmNavbar />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/Estados' element={ <Estados /> } />
          <Route exact path='/compactos' element={ <Compactos /> } />
          <Route exact path='/compactos/:id' element={ <CompactosId /> } />
        </Routes>
      </BrowserRouter>
      <div className='container mt-3'>
          <RickiMortiPersonajes personajes={ character } />

      </div>
      
    </div>
  );
}

export default App;
