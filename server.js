const pokemons = require("./models/pokemon");
// importing pokemon.js from models

const express = require("express");


const app = express();



const PORT = 3000;



// ------ middleware

app.set('view engine', 'jsx');
// setting view engin jsx


app.engine('jsx', require('express-react-views').createEngine());
// creating our engine

app.use(express.json());
// allow us to read client's request.body

app.use(express.urlencoded({ extended: false }));
// accepting data in a specific format 


// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Pokemon App!</h1>");
});

app.get("/pokemons", (req, res)=>{
  res.render("Index", { pokemons: pokemons });
})





app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});