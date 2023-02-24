import { useState, useEffect, useContext } from "react";
//CSS
import "./App.css";
//icons
import { BiWorld } from "react-icons/bi";
//components
import Nav from "./components/Nav/Nav";
import Searcher from "./components/Searcher/Searcher";
import PrevNextContainer from "./components/PrevNextContainer/PrevNextContainer";
import CharacterModal from "./components/CharacterModal/CharacterModal";
import Footer from "./components/Footer/Footer";
import CharactersContainer from "./components/CharactersContainer/CharactersContainer";
//context
import { RickAppContext } from "./context/RickAppContext";


function App() {
  const {selectedCharacter} = useContext(RickAppContext);

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
          <Searcher/>
          <PrevNextContainer/>
          <CharactersContainer/>
        </section>

        {/* Modal when selecting one character*/}
        <CharacterModal
          className="characterModal"
          image={selectedCharacter ? selectedCharacter.image : null}
          name={selectedCharacter ? selectedCharacter.name : null}
          species={selectedCharacter ? selectedCharacter.species : null}
          status={selectedCharacter ? selectedCharacter.status : null}
          gender={selectedCharacter ? selectedCharacter.gender : null}
          origin={selectedCharacter ? selectedCharacter.origin : null}
        />
      </main>

      {/* --------FOOTER CONTENT--------- */}
      <Footer/>
    </>
  );
}

export default App;
