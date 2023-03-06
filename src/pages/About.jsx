import React from "react";
import "../styles/About.scss";
import { BiWorld } from "react-icons/bi";
import Nav from "../components/Nav";

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
          <p>
            Rick and morty app has been made using the{" "}
            <a href="https://rickandmortyapi.com/documentation/">
              rickandmortyapi
            </a>
            , if you want to make a project using this API you can check that
            page.
          </p>
          <p>
            This page is a personal project made for just practicing and improve
            React skills, feel free to get the code by yourself and check it!
          </p>
          <p>
            If you want to know more about more projects you can visit the next
            link. HAVE FUN :)
          </p>
        </div>
      </section>
    </>
  );
};
