import CharacterModal from "../CharacterModal/CharacterModal";
import "./CharacterCard.css";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useState } from "react";

function CharacterCard({
  character,
  image,
  name,
  species,
  status,
  gender,
  openModal,
  setSelectedCharacter,
}) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".character-card"), {
      max: 25,
      speed: 400,
      glare: true,
    });
  }, []);

  return (
    <div
      className="character-card"
      data-tilt={image ? "" : undefined}
      onClick={() => {
        setSelectedCharacter(character);
        openModal();
      }}
    >
      <figure className="parallax-inner-elements">
        <img src={image} alt="" />
      </figure>
      <h3 className="parallax-inner-elements">{name}</h3>
      <div className="parallax-inner-elements">
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
