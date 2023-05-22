import { useState } from "react";
import Categories from "./components/Categories"
import GifsExpo from "./components/GifsExpo"



function App() {
  const [categories, setCategorias] = useState(["Drgon Ball", "One pice"]);

  return (
    <div className="ms-5 mt-5 me-5">
      <h3>Gif Demo App </h3>
      <hr />
      <Categories
      categories={categories}
      setCategorias={setCategorias}
      />
      <hr />
      //<GifsExpo categories={categories} />//
    </div>
  );
}

export default App;
