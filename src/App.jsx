import { useState, useEffect, useContext } from "react";
//CSS
import "./App.css";
//icons
import { BiWorld } from "react-icons/bi";
//components
import Nav from "./components/Nav/Nav";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Searcher from "./components/Searcher/Searcher";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  /*for next page and previous page buttons*/
  const [prevPageExistence, setPrevPageExistence] = useState(null);
  const [nextPageExistence, setNextPageExistence] = useState(null);

  // To search a term
  const [searchTerm, setSearchTerm] = useState("");
  // To show modal for a selected character
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}`
      );
      const data = await res.json();
      setCharacters(data.results);
      setPrevPageExistence(data.prev);
      setNextPageExistence(data.next);
    };
    fetchData();
  }, [page, searchTerm]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {/* ------HEADER CONTENT-------- */}
      <header className="header">
        <BiWorld className="header-logo"></BiWorld>
        <Nav />
      </header>

      {/* --------MAIN CONTENT---------- */}
      <main className="main">
        {/* Title */}
        <h1 className="main-title text-animation">Rick and Morty App</h1>

        {/* Characters section */}
        <section className="characters-section">
          <h2 className="section-subtitle">Characters</h2>
          <Searcher searchTerm={searchTerm} handleSearch={handleSearch} />
          <div className="prev-next-container">
            <button
              className={`prev-next-buttons prev-button ${
                prevPageExistence === null ? "display-none" : ""
              }`}
              onClick={previousPage}
            >
              Prev
            </button>
            <button
              className={`prev-next-buttons next-button ${
                nextPageExistence === null ? "display-none" : ""
              }`}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
          <div className="characters-container">
            {characters.map((character) => {
              return (
                <CharacterCard
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  onClick={() => setSelectedCharacter(character)}
                />
              );
            })}
          </div>
          {/* {selectedCharacter && (
            <div className="modal">
              <div className="modal-content">
                <h2>{selectedCharacter.name}</h2>
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                />
                <p>Status: {selectedCharacter.status}</p>
                <p>Species: {selectedCharacter.species}</p>
                <p>Gender: {selectedCharacter.gender}</p>
                <button onClick={() => setSelectedCharacter(null)}>
                  Close
                </button>
              </div>
            </div>
          )} */}
        </section>
      </main>

      {/* --------FOOTER CONTENT--------- */}
      <footer className="footer">
        <p>
          Made with ❤️ by <b>Eufanzky</b>
        </p>
      </footer>
    </>
  );
}

export default App;
