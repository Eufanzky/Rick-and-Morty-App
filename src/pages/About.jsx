import React from "react";
import "../styles/About.scss";
import { BiWorld } from "react-icons/bi";
import Nav from "../components/Nav";
import { AnimatedBackground } from "../components/AnimatedBackground";

export const About = () => {
  return (
    <>
      {/* ------HEADER CONTENT-------- */}
      <header className="header">
        <BiWorld className="header-logo"></BiWorld>
        <Nav />
      </header>

      <section className="About center-items">
        <div className="about-container center-items">
          <h2>About</h2>
          <p>
            "Rick and Morty App" is created using official's API of the serie.
            This app is a personal project made with Reactjs.
          </p>
          <p>
            The focus of the app has been to give to those Rick and Morty lovers
            a place to get detailed info about the characters. This app has
            responsive design and a good architecture, following best practices
            of development.
          </p>
          <p>
            If you want to contribute, collaborate, or add something, you can
            make a pull request on the next link:{" "}
            <a href="https://github.com/Eufanzky/Rick-and-Morty-App">Github</a>
          </p>
          <p>
            If you are looking for more projects that inspire you or expand your
            abbilities, I invite you to explore my website, where you will find
            more projects that i made.{" "}
            <a href="https://eufanzky.github.io/Portfolio/">Portfolio</a>
          </p>
        </div>
      </section>
      <AnimatedBackground />
    </>
  );
};
