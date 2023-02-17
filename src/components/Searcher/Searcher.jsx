import React from "react";
import { ReactDOM } from "react";
import './Searcher.css';


function Searcher({searchTerm, handleSearch}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search characters by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}


export default Searcher;