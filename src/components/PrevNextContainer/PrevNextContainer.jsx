import React from "react";
import { ReactDOM } from "react";
import "./PrevNextContainer.css";

function PrevNextContainer({prevPageExistence, nextPageExistence, previousPage, nextPage}) {
  return (
    <div className="prev-next-container">
      <button
        className={`prev-next-buttons prev-button ${
          prevPageExistence === null ? "display-none" : ""
        }`}
        onClick={previousPage}
      >
        Prev
      </button>
      <button
        className={`prev-next-buttons next-button ${
          nextPageExistence === null ? "display-none" : ""
        }`}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}

export default PrevNextContainer;