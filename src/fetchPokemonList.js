const fetchPokemonList = async ({ queryKey }) => {
  const limit = queryKey[1];

  if (!limit) return [];

  const apiRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );

  if (!apiRes.ok) {
    throw new Error(`Something went wrong fetching the pokemons`);
  }
  return apiRes.json(); // the returned expected is a promise
};

export default fetchPokemonList;
