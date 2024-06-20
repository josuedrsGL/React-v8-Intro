import { useQuery } from "@tanstack/react-query";
import fetchPokemonList from "./fetchPokemonList";

export default function useNameList(limit) {
  const results = useQuery(["pokemon_list", limit], fetchPokemonList);

  return [results?.data?.results ?? [], results.status];
}
