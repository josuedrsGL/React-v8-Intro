const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};

//declaration of component
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Do you like it?, Adopt me!"),
    React.createElement(Pet, {
      name: "honey",
      animal: "dog",
      breed: "german sheperd",
    }),
    React.createElement(Pet, {
      name: "lulú",
      animal: "dog",
      breed: "French puddle",
    }),
    React.createElement(Pet, {
      name: "Temari",
      animal: "cat",
      breed: "Azul ruso",
    }),
  ]);
};
// Getting the root DOM context
const container = document.getElementById("root");
// passing root context to react
const root = ReactDOM.createRoot(container);
// rendering the component
root.render(React.createElement(App));