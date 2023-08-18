import React, { useEffect, useState } from "react";
import "../styles/CharacterGameCard.scss";

export const CharacterGameCard = ({
  numberOfClicks,
  setNumberOfClicks,
  image,
  arrOfImages,
  setArrOfImages,
  arrOfIds,
  setArrOfIds,
  idgamecard,
}) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleClick = (event) => {
    setIsFlipped(!isFlipped);
    setNumberOfClicks(numberOfClicks + 1);

    // Get the front image of the clicked game card and add it to the "arrOfImages" array
    let frontalCardElement = Array.from(
      event.target.parentElement.parentElement.childNodes
    )[0];
    let frontImage = Array.from(frontalCardElement.childNodes)[0].src;
    let frontId = frontalCardElement.parentElement.getAttribute("idgamecard");
    const auxiliarArray = [...arrOfImages]
    const auxiliarArray2 = [...arrOfIds]
    auxiliarArray.push(frontImage)
    auxiliarArray2.push(frontId)
    setArrOfImages(auxiliarArray)
    setArrOfIds(auxiliarArray2)
  };

  return (
    <div
      className={`game-card ${isFlipped ? "flipped" : ""}`}
      style={{ pointerEvents: !isFlipped ? "none" : "auto" }}
      onClick={handleClick}
      idgamecard={idgamecard}
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
