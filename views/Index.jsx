import React from "react";

function Index(props) {
  const pokemons = props.pokemons;
  const myStyle = {
    color: "#ffffff",
    backgroundColor: "#000000",
  };
  return (
    <>
      <h1 style={myStyle}>See All The PokeMon</h1>

      <h1>
        {pokemons.map((pokemon, i) => {
          const capitalizedFirst = pokemon.name.charAt(0).toUpperCase();
          const rest_of_the_name =
            capitalizedFirst + pokemon.name.slice(1).toLowerCase();
          // return <p>{rest_of_the_name}</p>;
          return (
            <p>
              <a href={`/pokemon/${i}`}>{rest_of_the_name}</a>
            </p>
          );
        })}
      </h1>
     

      
    </>
  );
}

export default Index;
