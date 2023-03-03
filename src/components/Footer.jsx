import React, { useContext } from "react";
import "../styles/Footer.scss";
import { RickAppContext } from "../context/RickAppContext";

function Footer() {
  const { characters } = useContext(RickAppContext);

  return (
    <footer className={`footer ${characters ? "" : "footer-to-the-bottom"}`}>
      <p>
        Made with ❤️ by <b>Eufanzky</b>
      </p>
    </footer>
  );
}
export default Footer;
