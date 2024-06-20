import { useContext, useState } from "react";
import Modal from "./Modal";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import ErrorBoundary from "./ErrorBoundary";
import Demo from "./Demo";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); //with this we can use the params passed in the url from router directly in my component
  const results = useQuery(["details", id], fetchPet); //if you don't have id in details, make a fetch
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  console.log(showModal);
  const pet = results.data;

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          weight: {pet.weight} Height: {pet.height} Order: {pet.order}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt me {pet.name}</button>
        <p>Location area encounters: {pet.location_area_encounters}</p>
        <Demo />
        {showModal ? (
          <Modal>
            <div>
              <h1>Are you serious to become a master pokemon?</h1>
              <div>
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
// export default Details;

// We have to implements in this way for cover the entire component "details"
function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary errorComponent={<h2>something went wrong, i am sorry</h2>}>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
