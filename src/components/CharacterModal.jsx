import React, { useContext } from "react";
import "../styles/CharacterModal.scss";
import { RickAppContext } from "../context/RickAppContext";

function CharacterModal({ image, name, species, status, gender, origin }) {
  const { isOpen, closeModal } = useContext(RickAppContext);
  if (!isOpen) return null;

  return (
    <div className="character-modal">
      <div className="character-modal-content">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <figcaption className="character-modal-content__image-container">
          <img src={image} alt={name} />
        </figcaption>
        <div className="character-modal-content__text-container">
          <h3>{name}</h3>
          <p>Species: {species}</p>
          <p>Status: {status}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;
