import Pet from "./Pet";

const Results = ({ pet }) => {
  return (
    <div className="search">
      {!pet ? (
        <h1>No pets found</h1>
      ) : (
        <Pet
          key={pet.id}
          name={"Poke " + pet.name}
          animal="pokemon"
          baseExperience={pet.base_experience}
        />
      )}
    </div>
  );
};

export default Results;
