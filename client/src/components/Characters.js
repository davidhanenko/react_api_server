import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/characters-page.css'

export default function Characters({ character }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then(res => {
        const charactersApiData = res.data;
        setCharacters(charactersApiData.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!characters) return <h3>Loading...</h3>;

  return (
    <div id='main-container'>
      {characters.map((character, i) => (
        <SingleCharacter key={i} character={character} i={i} />
      ))}
    </div>
  );
}

function SingleCharacter({ character }) {
  return (
    <div className='character'>
      <h3 className='name'>Name: {character.name}</h3>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
    </div>
  );
}
