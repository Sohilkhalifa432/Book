import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  // states
  const [input, setInput] = useState("");
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`https://book-l7ss.onrender.com/books`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [input]);

  return (
    <SearchContext.Provider value={{ input, setInput, book, setBook }}>
      {children}
    </SearchContext.Provider>
  );
};
