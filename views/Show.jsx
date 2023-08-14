import React from "react";

function Show(props) {
  const pokemons = props.pokemons;
  const myStyle = {
    width: "300px",
    height: "100px",
  };
  // const jpg = ".jpg"
  return (
    <>
      <div>
        <h1>Gotta Catch 'Em All</h1>
      </div>

      <h1>{pokemons.name}</h1>
      <img src={pokemons.img + ".jpg"} style={myStyle} />
      
    </>
  );
}

export default Show;
