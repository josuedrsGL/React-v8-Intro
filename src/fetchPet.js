const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  return apiRes.json(); // the returned expected is a promise
};

export default fetchPet;
