import React, { useState, useEffect } from "react";
import { BiShuffle, BiWorld } from "react-icons/bi";
import { CharacterGameCard } from "../components/CharacterGameCard";
import Nav from "../components/Nav";
import "../styles/Game.scss";

export const Game = () => {
  const [totalCards, setTotalCards] = useState(0);
  const [cards, setCards] = useState([]);
  const [numberOfcards, setNumberOfcards] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");

  const [arrOfImages, setArrOfImages] = useState([]);
  const [arrOfIds, setArrOfIds] = useState([]);
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);


  
  //useEffect for fetching data and set cards
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        setTotalCards(data.info.count);
      } catch (error) {
        console.error(error);
      }
    };

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    //gets random cards AND sets them at cards state
    const getRandomcards = async () => {
      try {
        let apiString = ``;
        for (let i = 1; i <= numberOfcards; i++) {
          if (i == numberOfcards) {
            apiString += `${parseInt(randomNumber(1, totalCards))}`;
          } else {
            apiString += `${parseInt(randomNumber(1, totalCards))},`;
          }
        }
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${apiString}`
        );
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    getRandomcards();
  }, [totalCards, numberOfcards]);

  //put cards on the grid for the game
  let cardsForGrid = [...cards, ...cards];
  useEffect(() => {
    cardsForGrid.sort(function () {
      return Math.random() - 0.5;
    });
  }, []);


  /*every time any card is flipped we get the two flipped cards */
  useEffect(()=> {
    
  },[numberOfClicks])

  /*Get flipped cards, 
  unflip them if they ar different, 
  and flip them if they are equal */
  useEffect(() => {
    if (numberOfClicks === 2) {
      const [id1, id2] = flippedCards;
      const [card1, card2] = [
        cards.find((card) => card.id === id1),
        cards.find((card) => card.id === id2),
      ];
      if (card1.image === card2.image) {
        setUnflippedCards([...unflippedCards, ...flippedCards]);
      } else {
        setTimeout(() => {
          setUnflippedCards([...unflippedCards, ...flippedCards]);
        }, 1000);
      }
      setFlippedCards([]);
      setNumberOfClicks(0);
    }
  }, [flippedCards]);

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
          {cardsForGrid.map((character, index) => {
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
        {/* BUTTONS FOR DIFFICULTY*/}
        <section className="difficulty-section">
          <button
            onClick={() => {
              setDifficulty("easy");
              setNumberOfcards(10);
            }}
          >
            Easy
          </button>
          <button
            onClick={() => {
              setDifficulty("medium");
              setNumberOfcards(20);
            }}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setDifficulty("hard");
              setNumberOfcards(30);
            }}
          >
            Hard
          </button>
        </section>
      </section>
    </>
  );
};
