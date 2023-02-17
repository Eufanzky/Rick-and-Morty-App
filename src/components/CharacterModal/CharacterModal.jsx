import React from "react";

function CharacterModal({
  isOpen,
  onClose,
  image,
  name,
  species,
  status,
  gender,
  origin,
}) {
  if (!isOpen) return null;

  return (
    <div className="character-modal">
      <div className="character-modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
      </div>
    </div>
  );
}

export default CharacterModal;