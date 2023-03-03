import React, {useContext} from "react";
import "../styles/CharactersContainer.scss";
import CharacterCard from "../components/CharacterCard";
import { RickAppContext } from "../context/RickAppContext";

function CharactersContainer() {
  const {characters, openModal, setSelectedCharacter} = useContext(RickAppContext);
  return (
    <div className="characters-container">
      {characters ? (
        characters.map((character) => {
          
          return (
            <CharacterCard
              key={character.id}
              character={character}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              openModal={openModal}
              setSelectedCharacter={setSelectedCharacter}
            />
          );
        })
      ) : (
        <p className="not-found-404-sentence">Not found</p>
      )}
    </div>
  );
}

export default CharactersContainer;