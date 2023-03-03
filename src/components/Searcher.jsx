import React,{ useContext } from "react";
import '../styles/Searcher.scss';
import { RickAppContext } from "../context/RickAppContext";

function Searcher() {
  const { searchTerm, handleSearch } = useContext(RickAppContext);
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