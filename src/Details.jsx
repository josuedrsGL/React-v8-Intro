import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams(); //with this we can use the params passed in the url from router directly in my component
  const results = useQuery(["details", id], fetchPet); //if you don't have id in details, make a fetch

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data;

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          weight: {pet.weight} Height: {pet.height} Order: {pet.order}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>Location area encounters: {pet.location_area_encounters}</p>
      </div>
    </div>
  );
};

export default Details;
