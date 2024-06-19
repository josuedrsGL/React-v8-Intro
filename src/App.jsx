import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Link } from "react-router-dom";

//declaration of component
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Do you like it?, Adopt me!</Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

// Getting the root DOM context
const container = document.getElementById("root");
// passing root context to react
const root = createRoot(container);
// rendering the component
root.render(<App />);
