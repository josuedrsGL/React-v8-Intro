import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Bogota, D.C.");
  console.log(`####location: ${location}`);
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="type your location"
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
