// src/components/SearchResults.jsx
import { useContext, useState } from "react";
import ResultNotFound from "./ResultNotFound";
import { SearchContext } from "../context/SearchContext";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function SearchResults() {
  const { book, setBook } = useContext(SearchContext);
  const { cart, setCart } = useContext(CartContext);

  const { id } = useParams();
  const navigate = useNavigate();
  function handleClick(bookId) {
    navigate(`/book/${bookId}`);
  }

  return (
    <div style={{ position: "relative", top: "60px" }}>
      {book && book.length > 0 ? (
        <div className="book-list">
          <div>
            Go To <NavLink to="/">Home</NavLink>
          </div>
          {book.map((bookItem) => (
            <div className="book-card" key={bookItem.id}>
              <img
                src={bookItem.imageUrl}
                alt={bookItem.title}
                className="book-image"
              />
              <div className="book-info">
                <h2 className="book-title">{bookItem.title}</h2>
                <p className="book-author">By {bookItem.author}</p>
                <p className="book-genre">Genre: {bookItem.genre}</p>
                <p className="book-price">Price: ₹{bookItem.price}</p>
                <p className="book-rating">Rating: ⭐ {bookItem.rating}</p>
                <p className="book-stock">
                  {bookItem.stock > 0
                    ? `In Stock: ${bookItem.stock}`
                    : "Out of Stock"}
                </p>
                <p className="book-language">Language: {bookItem.language}</p>
                <p className="book-year">Published: {bookItem.year}</p>
                <p className="book-publisher">
                  Publisher: {bookItem.publisher}
                </p>
                <p className="book-isbn">ISBN: {bookItem.isbn}</p>
                <p className="book-description">{bookItem.description}</p>
                <p className="book-discount">Discount: {bookItem.discount}%</p>
                <div className="book-card-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      alert("Item Added!");
                      setCart((prev) => [...prev, bookItem]),
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, bookItem])
                        );
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleClick(bookItem.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ResultNotFound />
      )}
    </div>
  );
}

export default SearchResults;
