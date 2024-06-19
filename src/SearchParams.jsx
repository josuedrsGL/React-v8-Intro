import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Bogota, D.C.");
  const [animal, setAnimal] = useState("");
  const [name, setName] = useState("bulbasaur");
  const [pokemon, setPokemon] = useState([]);
  const names = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
  ];

  useEffect(() => {
    requestPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    setPokemon(data);
  }
  console.log("Pokemon from api");
  console.log(pokemon);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPokemon();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="type your location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setName(e.target.value)}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="name">
          name
          <select
            id="name"
            disabled={name.length === 0}
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            {names.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
      {
        <Pet
          key={pokemon.id}
          name={"Poke " + pokemon.name}
          animal="pokemon"
          baseExperience={pokemon.base_experience}
        />
      }
    </div>
  );
};

export default SearchParams;
