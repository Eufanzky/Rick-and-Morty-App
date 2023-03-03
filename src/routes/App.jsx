import { useContext } from "react";
//CSS
import "../styles/App.scss";
//icons
import { BiWorld } from "react-icons/bi";
//components
import Nav from "../components/Nav";
import Searcher from "../components/Searcher";
import PrevNextContainer from "../containers/PrevNextContainer";
import CharacterModal from "../components/CharacterModal";
import Footer from "../components/Footer";
import CharactersContainer from "../containers/CharactersContainer";
//context
import { RickAppContext } from "../context/RickAppContext";


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
