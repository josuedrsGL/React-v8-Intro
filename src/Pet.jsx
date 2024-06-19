import { Link } from "react-router-dom";
const Pet = ({ name, animal, baseExperience, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  return (
    <Link to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1> {name} </h1>
        <h2>
          {animal} - base experience: {baseExperience}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
