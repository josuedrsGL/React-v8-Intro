import { useState, useEffect } from "react";
import Pet from "./Pet";
import useNameList from "./useNameList";

const SearchParams = () => {
  const [location, setLocation] = useState("Bogota, D.C.");
  const [limit, setLimit] = useState(3);
  const [name, setName] = useState("bulbasaur");
  const [pokemon, setPokemon] = useState([]);
  const [names, status] = useNameList(limit);

  useEffect(() => {
    requestPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    setPokemon(data);
  }

  console.log("### LOG Status");
  console.log(status);
  console.log("end");

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
        <label htmlFor="limit">
          limit
          <input
            onChange={(e) => setLimit(e.target.value)}
            id="limit"
            value={limit}
            placeholder="type a limit"
          />
        </label>
        <label htmlFor="name">
          name
          <select
            id="name"
            disabled={name.length === 0}
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            {names.map((pokemon) => (
              <option key={pokemon.name}>{pokemon.name}</option>
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
