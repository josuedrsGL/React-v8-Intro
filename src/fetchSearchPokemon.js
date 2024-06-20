const fetchPokemon = async ({ queryKey }) => {
  const { name } = queryKey[1];
  console.log(name);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  //handle errors
  if (!res.ok) {
    throw new Error(`pet ${name} search does not works `);
  }

  return res.json();
};

export default fetchPokemon;
