import React, { useState } from "react";
import "../styles/CharacterGameCard.scss";

export const CharacterGameCard = ({ image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let [numberOfClicks, setNumberOfClicks] = useState(0);

  const handleClick = (event) => {
    setIsFlipped(!isFlipped);
    console.log(numberOfClicks);
    console.log(event.target);
    if (numberOfClicks === 2) {
      console.log("dos clicks :o");
    } else {
      setNumberOfClicks(numberOfClicks++);
    }
  };

  return (
    <div
      className={`game-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="game-card-image-div-front">
        <img src={image} alt="front" />
      </div>
      <div className="game-card-image-div-back">
        <img
          src="https://media.istockphoto.com/id/1263395015/es/foto/lupa-y-marca-de-pregunta-sobre-fondo-p%C3%BArpura.jpg?s=1024x1024&w=is&k=20&c=a9w-OvmwVo8XhwIVf8gcllP6p2oY-v66IVJHG0-iyzc="
          alt="back"
        />
      </div>
    </div>
  );
};
