function Character({ character }) {
  if (!character) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <>
        <h3>Name: {character.name}</h3>
        <p>height: {character.height} cm</p>
      </>
    );
  }
}

export default Character;
