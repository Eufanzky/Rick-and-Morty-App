import CharacterModal from "../CharacterModal/CharacterModal";
import "./CharacterCard.css";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useState } from "react";

function CharacterCard({ image, name, species, status, gender }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      onClick={handleOpenModal}
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
      <CharacterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={image}
        name={name}
        species={species}
        status={status}
        gender={gender}
        origin={origin}
      />
    </div>
  );
}

export default CharacterCard;
