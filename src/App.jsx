import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemCounter from "./components/ItemCount/ItemCounter";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="Bienvenidos" />
        <ItemDetailContainer />
      </main>
    </>
  );
}
export default App;
