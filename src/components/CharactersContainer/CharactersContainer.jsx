import React from "react";
import { ReactDOM } from "react";
import "./CharactersContainer.css";
import CharacterCard from "../CharacterCard/CharacterCard";


function CharactersContainer({ characters, openModal, setSelectedCharacter }) {
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