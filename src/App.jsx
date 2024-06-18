import {createRoot} from "react-dom/client";
import Pet from "./Pet";

//declaration of component
const App = () => {
  <div>
    <h1>Do you like it?, Adopt me!</h1>
    <Pet name="honey" animal="dog" breed="german sheperd"/>
    <Pet name="lulú" animal="dog" breed="French puddle"/>
    <Pet name="Temari" animal="cat" breed="Azul ruso"/>
  </div>
};

// Getting the root DOM context
const container = document.getElementById("root");
// passing root context to react
const root = createRoot(container);
// rendering the component
root.render(<App />)