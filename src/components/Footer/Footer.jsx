import React from "react";
import { ReactDOM } from "react";
import "./Footer.css";


function Footer({characters}) {
  return (
    <footer className={`footer ${characters ? "" : "footer-to-the-bottom"}`}>
      <p>
        Made with ❤️ by <b>Eufanzky</b>
      </p>
    </footer>
  );
}
export default Footer;