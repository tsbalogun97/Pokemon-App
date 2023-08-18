import React from "react";
function NewPage() {
  return (
    <>
      <div>
        <form action="/pokemons" method="POST">
          Name:
          <input type="text" name="name" />
          <br />
          Image:
          <input type="url" name="img"/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
export default NewPage;



