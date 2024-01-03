import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const API_URL = "https://api.disneyapi.dev/character?name=";

  const [characters, setCharacters] = useState([]);

  // add event handler where you perform the fetch

  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <Characters characters={characters} />
    </div>
  );
}

export default App;
