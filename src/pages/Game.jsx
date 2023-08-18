import React, { useState, useEffect } from "react";
import { BiShuffle, BiWorld } from "react-icons/bi";
import { CharacterGameCard } from "../components/CharacterGameCard";
import Nav from "../components/Nav";
import "../styles/Game.scss";
import { AnimatedBackground } from "../components/AnimatedBackground";

export const Game = () => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");

  const [arrOfImages, setArrOfImages] = useState([]);
  const [arrOfIds, setArrOfIds] = useState([]);
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);

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
  useEffect(() => {
    charactersForGrid.sort(function () {
      return Math.random() - 0.5;
    });
  }, []);

  /*TODO: DELETE THIS USEEFFCT AFTER PROVES */
  useEffect(() => {
    const flipCards = (id1, id2) => {
      const gameCards = [
        ...document.querySelector(".game-container").childNodes,
      ];

      gameCards.map((element) => {
        const id = element.getAttribute("idgamecard");
        if (id === id1 || id === id2) {
          element.style.pointerEvents = "none";
          setTimeout(() => {
            element.style.pointerEvents = "auto";
            element.className = "game-card flipped";
          }, 1000);
        }
      });
    };
    if (numberOfClicks === 2) {
      arrOfImages[0] === arrOfImages[1]
        ? console.log("same")
        : flipCards(arrOfIds[0], arrOfIds[1]);
      // Reset the "arrOfImages" array and the "numberOfClicks" state variable
      setArrOfImages([]);
      setArrOfIds([]);
      setNumberOfClicks(0);
    }
  }, [arrOfImages]);

  useEffect(() => {
    if (numberOfClicks === 2) {
      if (arrOfImages[0] === arrOfImages[1]) {
        console.log("same");
      } else {
        setFlippedCards([...flippedCards, ...arrOfIds]);
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
      // Reset the "arrOfImages" array and the "numberOfClicks" state variable
      setArrOfImages([]);
      setArrOfIds([]);
      setNumberOfClicks(0);
    }
  }, [arrOfImages]);

  return (
    <>
      <header className="header">
        <BiWorld className="header-logo"></BiWorld>
        <Nav />
      </header>
      <section className="Game">
        <h2 className="difficulty-title">
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
            return (
              <CharacterGameCard
                numberOfClicks={numberOfClicks}
                setNumberOfClicks={setNumberOfClicks}
                arrOfImages={arrOfImages}
                setArrOfImages={setArrOfImages}
                arrOfIds={arrOfIds}
                setArrOfIds={setArrOfIds}
                image={character.image}
                key={index}
                idgamecard={index}
              />
            );
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
      <AnimatedBackground />
    </>
  );
};
