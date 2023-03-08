import React from "react";
import "../styles/CharacterGameCard.scss";

export const CharacterGameCard = ({ image }) => {
  return (
    <div className="game-card-image-div">
      <img src={image} />
    </div>
  );
};
