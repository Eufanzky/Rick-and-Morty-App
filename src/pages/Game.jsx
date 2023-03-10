import React, { useState, useEffect } from "react";
import { BiShuffle, BiWorld } from "react-icons/bi";
import { CharacterGameCard } from "../components/CharacterGameCard";
import Nav from "../components/Nav";
import "../styles/Game.scss";

export const Game = () => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        setTotalCharacters(data.info.count);
      } catch (error) {
        console.error(error);
      }
    };

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    const getRandomCharacters = async () => {
      try {
        let apiString = ``;
        for (let i = 1; i <= numberOfCharacters; i++) {
          if (i == numberOfCharacters) {
            apiString += `${parseInt(randomNumber(1, totalCharacters))}`;
          } else {
            apiString += `${parseInt(randomNumber(1, totalCharacters))},`;
          }
        }
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${apiString}`
        );
        const data = await res.json();
        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    getRandomCharacters();
  }, [totalCharacters, numberOfCharacters]);

  let charactersForGrid = [...characters, ...characters];
  charactersForGrid.sort(function () {
    return Math.random() - 0.5;
  });

  return (
    <>
      <header className="header">
        <BiWorld className="header-logo"></BiWorld>
        <Nav />
      </header>
      <section className="Game">
        <h2>
          {(difficulty === `easy` && `Easy Mode`) ||
            (difficulty === `medium` && `Medium Mode`) ||
            (difficulty === `hard` && `Hard Mode`)}
        </h2>
        <div
          className={`game-container 
          ${difficulty === "easy" ? "easy-container" : ""}
          ${difficulty === "medium" ? "medium-container" : ""}
          ${difficulty === "hard" ? "hard-container" : ""}
        `}
        >
          {charactersForGrid.map((character, index) => {
            return <CharacterGameCard image={character.image} key={index} />;
          })}
        </div>
        <section className="difficulty-section">
          <button
            onClick={() => {
              setDifficulty("easy");
              setNumberOfCharacters(10);
            }}
          >
            Easy
          </button>
          <button
            onClick={() => {
              setDifficulty("medium");
              setNumberOfCharacters(20);
            }}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setDifficulty("hard");
              setNumberOfCharacters(30);
            }}
          >
            Hard
          </button>
        </section>
      </section>
    </>
  );
};
