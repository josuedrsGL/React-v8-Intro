import { useState, useEffect } from "react";

const localCache = {};

export default function useNameList(limit) {
  const [nameList, setNameList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!limit) {
      setNameList([]);
    } else if (localCache[limit]) {
      setNameList(localCache[limit]);
    } else {
      requestNameList();
    }
    async function requestNameList() {
      setNameList([]);
      setStatus("loading");

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
      );

      const data = await res.json();
      localCache[limit] = data.results || [];
      setNameList(data.results);
      setStatus("loaded");
    }
  }, [limit]);
  return [nameList, status];
}
