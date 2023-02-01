import { useState, useEffect, useContext } from "react";
//CSS
import "./App.css";
//icons
import { BiWorld } from "react-icons/bi";
//components
import Nav  from "./components/Nav/Nav";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <BiWorld className="header-logo"></BiWorld>
      </header>

      <main className="main">
        <h1 className="main-title text-animation">Rick and Morty App</h1>
        <section className="characters-section">
          <h2 className="section-subtitle">Characters</h2>
          <div className="characters-container">
            {characters.map((character) => {
              return <CharacterCard
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
              />;
            })}
          </div>
        </section>
      </main>

      <footer className="footer"></footer>
    </>
  );
}

export default App;
