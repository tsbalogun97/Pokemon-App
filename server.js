const mongoose = require("mongoose");

const methodOverride = require("method-override");

const express = require("express");

require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(methodOverride("_method"));
//=========DB connection===========
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo!! 👍");
});

const Pokemons = require("./models/pokemon.js");
// importing pokemon.js from models

// ------ middleware

app.set("view engine", "jsx");
// setting view engin jsx

app.engine("jsx", require("express-react-views").createEngine());
// creating our engine

app.use(express.json());
// allow us to read client's request.body

app.use(express.urlencoded({ extended: false }));
// accepting data in a specific format

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Pokemon App!</h1>");
});

// app.get("/pokemons", (req, res) => {
//   res.render("Index", { pokemons: pokemons });
// });

// =======================  Read Route
app.get("/pokemons", (req, res) => {
  Pokemons.find({}).then((allPokemon) => {
    res.render("Index", { pokemons: allPokemon });
  });
});

// =============================== Post(Create) Route
app.post("/pokemons", async (req, res) => {
  const newPokemon = await Pokemons.create(req.body);
  res.redirect("/pokemons");
});

app.get("/pokemons/new", function (req, res) {
  res.render("NewPage");
});

// ============================== Edit Route
app.put("/pokemons/:id", async (req, res) => {
  try {
    const updatedInfo = await Pokemons.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.redirect(`/pokemons/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error: Update Route");
  }
});
app.get("/pokemons/:id/edit", async (req, res) => {
  const foundPokemonInfo = await Pokemons.findById(req.params.id);
  res.render("Edit", {
    pokemons: foundPokemonInfo,
  });
});

// ======================================== Delete Route
app.delete('/pokemons/:id',async(req,res)=>{
  await Pokemons.findByIdAndDelete(req.params.id);
  res.redirect("/pokemons")
});

// ========================================= Show Route
app.get("/pokemons/:id", async (req, res) => {
  const eachPokemon = await Pokemons.findById(req.params.id);
  await res.render("Show", {
    pokemons: eachPokemon,
  });
});
// app.get("/pokemons/:id", (req, res) => {
//   res.render("Show", {
//     pokemons: pokemons[req.params.id],
//   });
// });

// app.get("/pokemons/:id", async (req, res) => {
//   const eachPokemon = await Pokemons.findById(req.params.id);
//   res.render("Show", {
//       pokemon: eachPokemons,
//   });
// });

const PORT = 3000;



app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
