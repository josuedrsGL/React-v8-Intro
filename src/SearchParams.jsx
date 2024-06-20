import { useState, useContext } from "react";
// import Pet from "./Pet";
import Results from "./Results";
import useNameList from "./useNameList";
import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "./fetchSearchPokemon";
import AdoptedPetContext from "./AdoptedPetContext";

const SearchParams = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [reqParams, setReqParams] = useState({
    name: "",
  });
  const [limit, setLimit] = useState(3);
  const [names, status] = useNameList(limit);
  const result = useQuery(["search", reqParams], fetchPokemon);
  const pokemon = result?.data ?? {};

  console.log("### LOG Status");
  console.log(status);
  console.log(pokemon);
  console.log("end");

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); //avoid the refresh
          const formData = new FormData(e.target);
          const obj = {
            name: formData.get("name") ?? "",
          };
          setReqParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src="" alt={`pet ${adoptedPet.name}`} />
          </div>
        ) : null}
        <label htmlFor="limit">
          limit
          <input
            id="limit"
            value={limit}
            placeholder="type a limit"
            onChange={(e) => setLimit(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          name
          <select id="name" disabled={names.length === 0} name="name">
            {names.map((pokemon) => (
              <option key={pokemon.name}>{pokemon.name}</option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
      {<Results pet={pokemon} />}
    </div>
  );
};

export default SearchParams;
