import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

const styles = {
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "20px",
  },

  form: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "999px", // rounded pill
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
  },

  input: {
    padding: "8px 12px",
    outline: "none",
    border: "none",
    fontSize: "14px",
    width: "180px",
    backgroundColor: "transparent",
  },

  button: {
    padding: "8px 16px",
    backgroundColor: "#1e90ff", // modern blue
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.2s ease-in-out",
  },
};

function Search() {
  const { input, setInput, book, setBook } = useContext(SearchContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredBooks = book.filter((newbook) => {
      return newbook.title.toLowerCase().includes(input.toLowerCase());
    });
    setBook(filteredBooks);
    navigate(`/search/${input}`);
  };
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Search..."
        />
        <button type="submit" style={styles.button}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Search;
