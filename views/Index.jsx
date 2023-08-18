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
      <nav>
        <a href="/pokemons/new">Add New Pokemon</a>
      </nav>
      <h1>
        {pokemons.map((pokemon, i) => {
          const capitalizedFirst = pokemon.name.charAt(0).toUpperCase();
          const rest_of_the_name =
            capitalizedFirst + pokemon.name.slice(1).toLowerCase();
          // return <p>{rest_of_the_name}</p>;
          return (
            <div key={i}>
              <h2>
                <a href={`/pokemons/${pokemon._id}`}>{rest_of_the_name}</a>
              </h2>
              <p>
                <a href={`/pokemons/${pokemon._id}/edit`}>
                  Edit Pokemon's Info
                </a>
              </p>

              <form
                action={`/pokemons/${pokemon._id}?_method=DELETE`}
                method="POST"
              >
                <input type="submit" value="Delete" />
              </form>
            </div>
          );
        })}
      </h1>
    </>
  );
}

export default Index;
