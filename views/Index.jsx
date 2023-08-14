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
    {pokemons.map((pokemon) => {
          const capitalizedFirst = pokemon.name.charAt(0).toUpperCase();
          const rest_of_the_name =
            capitalizedFirst + pokemon.name.slice(1).toLowerCase();
          return <p>{rest_of_the_name}</p>;
        })}
    
    {/* {pokemons.map((ele)=>{
      return(
        <p>{ele.name}</p>
        )
        
      })} */}
    </h1>


    
    
    
    
    
    {/* <ul>
      <ol>
        <h3>
          {props.name.img}
        </h3>
      </ol>
    </ul>
    {pokemons.map((pokemon, i) => {
      return (
        <div key={i}>
          <a href={`/pokemons/${pokemon._id}`}>
            <h2>{pokemon.name}</h2>
          </a>
        </div>
      );
    })} */}

  
</>

  )

}

export default Index;