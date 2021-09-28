import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Character from './components/character.component';

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
 

  useEffect(()=> {
    axios.get("http://localhost:5000/")
    .then(res=> {
      const charactersApiData = res.data;
      setCharacters(charactersApiData.results);
    })
    .catch(err=> {
      console.log(err)
    })
  })

  if(!characters) return <h3>Loading...</h3>

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <h1>Hello There {name}</h1> */}
        {characters.map((character, i) => (
          <Character key={i} character={character} />
        ))}
      </header>
      <div id='container'></div>
    </div>
  );
}

export default App;
