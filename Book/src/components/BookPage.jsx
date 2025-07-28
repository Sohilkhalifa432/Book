import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://book-l7ss.onrender.com/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return (
      <div id="book-page" className="loading">
        Loading book details...
      </div>
    );
  }

  return (
    <div id="book-page" className="container">
      <div className="image-section">
        <img src={book.imageUrl} alt={book.title} />
      </div>
      <div className="details-section">
        <h1 className="title">{book.title}</h1>
        <p className="author">By {book.author}</p>
        <p className="genre">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="language">
          <strong>Language:</strong> {book.language}
        </p>
        <p className="year">
          <strong>Published Year:</strong> {book.year}
        </p>
        <p className="publisher">
          <strong>Publisher:</strong> {book.publisher}
        </p>
        <p className="rating">
          <strong>Rating:</strong> {book.rating} / 5
        </p>
        <p className="price">
          <strong>Price:</strong> ₹{book.price}{" "}
          {book.discount > 0 && (
            <span className="discount">({book.discount}% OFF)</span>
          )}
        </p>
        <p className="description">{book.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            alert("Item Added!");
            setCart((prev) => [...prev, book]),
              localStorage.setItem("cart", JSON.stringify([...cart, book]));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookPage;
