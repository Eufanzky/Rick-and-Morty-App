import "./CharacterCard.css";

import VanillaTilt from "vanilla-tilt";

function CharacterCard({ image, name, species, status, gender }) {
  VanillaTilt.init(document.querySelectorAll(".character-card"), {
    max: 25,
    speed: 400,
    glare: true,
  });


  return (
    <div className="character-card" data-tilt>
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
