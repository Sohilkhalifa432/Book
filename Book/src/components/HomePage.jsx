// src/pages/HomePage.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
import ResultNotFound from "../ui/ResultNotFound";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { book, setBook } = useContext(SearchContext);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleClick(bookId) {
    navigate(`/book/${bookId}`);
  }

  return (
    <>
      <header className="hero-section header-bg">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Discover Your Next Great Read</h1>
            <p className="hero-subtitle">
              Shop the best hand-picked books, delivered straight to your door.
            </p>
            <NavLink
              to="/search/:id"
              className="hero-button"
              style={{ textDecoration: "none" }}
            >
              📚 Start Shopping
            </NavLink>
          </div>
        </div>
      </header>

      <div className="product-container">
        <h1 className="product-title">All Products</h1>

        <div>
          {book && book.length > 0 ? (
            <div className="book-list">
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
                    <p className="book-language">
                      Language: {bookItem.language}
                    </p>
                    <p className="book-year">Published: {bookItem.year}</p>
                    <p className="book-publisher">
                      Publisher: {bookItem.publisher}
                    </p>
                    <p className="book-isbn">ISBN: {bookItem.isbn}</p>
                    <p className="book-description">{bookItem.description}</p>
                    <p className="book-discount">
                      Discount: {bookItem.discount}%
                    </p>
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
      </div>
    </>
  );
}

export default HomePage;
