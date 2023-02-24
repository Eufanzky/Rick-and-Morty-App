import { createContext, useState, useEffect } from "react";

export const RickAppContext = createContext();

export function RickAppContextProvider(props) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  /*for next page and previous page buttons*/
  const [prevPageExistence, setPrevPageExistence] = useState(null);
  const [nextPageExistence, setNextPageExistence] = useState(null);

  // To search a term
  const [searchTerm, setSearchTerm] = useState("");

  // To show modal for a selected character
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}`
        );
        const data = await res.json();
        setCharacters(data.results);
        setPrevPageExistence(data.info.prev);
        setNextPageExistence(data.info.next);
      } catch (error) {
        console.log("hubo un error");
        console.error(error);
      }
    };
    fetchData();
  }, [page, searchTerm]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //to open or close CharacterModal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <RickAppContext.Provider
      value={{
        characters,
        page,
        prevPageExistence,
        nextPageExistence,
        searchTerm,
        selectedCharacter,
        setSelectedCharacter,
        isOpen,
        previousPage,
        nextPage,
        handleSearch,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </RickAppContext.Provider>
  );
}
