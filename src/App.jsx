import { useState, useEffect, useContext } from "react";
//import { Nav } from "./components/Nav/Nav";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState("");

  const urlCharacters = "https://rickandmortyapi.com/api/character";


  async function getDataFromAPI(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error); 
    }
  }

  return (
    <>
      <header className="header">
      </header>

      <main className="main">
        <h1 className="main-title">Rick and Morty App</h1>
        <section className="characters-section">
          <h2>Characters</h2>
          <div></div>
        </section>
      </main>

      <footer className="footer">

      </footer>
    </>
  );
}

export default App;
