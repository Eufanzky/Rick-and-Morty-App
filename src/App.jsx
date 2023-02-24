import { useState, useEffect, useContext } from "react";
//CSS
import "./App.css";
//icons
import { BiWorld } from "react-icons/bi";
//components
import Nav from "./components/Nav/Nav";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Searcher from "./components/Searcher/Searcher";
import PrevNextContainer from "./components/PrevNextContainer/PrevNextContainer";
import CharacterModal from "./components/CharacterModal/CharacterModal";
import Footer from "./components/Footer/Footer";
import CharactersContainer from "./components/CharactersContainer/CharactersContainer";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}`
        );
        const data = await res.json();
        setCharacters(data.results);
        setPrevPageExistence(data.info.prev);
        setNextPageExistence(data.info.next);
      } catch (error) {
        console.log("hubo un error");
        console.error(error);
      }
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

  //to open or close CharacterModal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
          <PrevNextContainer
            previousPage={previousPage}
            nextPage={nextPage}
            prevPageExistence={prevPageExistence}
            nextPageExistence={nextPageExistence}
          />
          <CharactersContainer
            characters={characters}
            openModal={openModal}
            setSelectedCharacter={selectedCharacter}
          />
        </section>

        {/* Modal when selecting one character*/}
        <CharacterModal
          className="characterModal"
          isOpen={isOpen}
          closeModal={closeModal}
          image={selectedCharacter ? selectedCharacter.image : null}
          name={selectedCharacter ? selectedCharacter.name : null}
          species={selectedCharacter ? selectedCharacter.species : null}
          status={selectedCharacter ? selectedCharacter.status : null}
          gender={selectedCharacter ? selectedCharacter.gender : null}
          origin={selectedCharacter ? selectedCharacter.origin : null}
        />
      </main>

      {/* --------FOOTER CONTENT--------- */}
      <Footer characters={characters} />
    </>
  );
}

export default App;
