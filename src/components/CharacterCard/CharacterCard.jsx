import CharacterModal from "../CharacterModal/CharacterModal";
import "./CharacterCard.css";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useState } from "react";
import { useContext } from "react";
import { RickAppContext } from "../../context/RickAppContext";

function CharacterCard({image, character, name, species, status, gender}) {
  const {setSelectedCharacter, openModal} = useContext(RickAppContext);
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
