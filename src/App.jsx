import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

//declaration of component
const App = () => {
  return (
    <div>
      <h1>Do you like it?, Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

// Getting the root DOM context
const container = document.getElementById("root");
// passing root context to react
const root = createRoot(container);
// rendering the component
root.render(<App />);
