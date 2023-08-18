import React from "react";
function Edit(props) {
  const pokemons = props.pokemons;
  return (
    <div>
      <form action={`/pokemons/${pokemons._id}?_method=PUT`} method="POST">
        Name:
        <input type="text" name="name" defaultValue={pokemons.name} />
        <br />
        Image:
        <input type="text" name="img" defaultValue={pokemons.img} />
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}
export default Edit;