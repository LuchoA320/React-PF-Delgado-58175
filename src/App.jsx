import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <NavBar />
      <main className="mainItems">
        <ItemListContainer titulo="Celular Samsung" precio={850.0} />
        <ItemListContainer titulo="Celular Iphone" precio={900.0} />
        <ItemListContainer titulo="Celular Motorola" precio={700.0} />
      </main>
    </>
  );
}
export default App;
