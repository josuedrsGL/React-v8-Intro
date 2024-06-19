import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

//declaration of component
const App = () => {
  return (
    <BrowserRouter>
      <h1>Do you like it?, Adopt me!</h1>
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
