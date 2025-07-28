// src/components/Cart.jsx

import React, { useContext, useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingItem = localStorage.getItem("cart");

    setCart(JSON.parse(existingItem));
  }, [cart.length]);

  if (cart.length == 0) return <p>Loading...</p>;

  function handleRemoveItem(bookId) {
    const idx = cart.findIndex((book) => book.id === bookId);
    if (idx !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(idx, 1); // Sirf first match waala item remove
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  const total = cart.reduce((accum, curr) => {
    // return accum + curr.price, 0;
    return accum + curr.price;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.length ? (
        <>
          {cart.map((cart, idx) => {
            return (
              <div key={`${cart.id}-${idx}`}>
                <ul className="cart-list">
                  <li className="cart-item">
                    <img
                      src={cart.imageUrl}
                      alt={cart.title}
                      className="cart-item-img"
                    />
                    <div className="cart-details">
                      <span className="cart-item-name">{cart.title}</span>
                      <span className="cart-item-author">{cart.author}</span>
                      <span className="cart-item-price">{cart.price}</span>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => {
                        handleRemoveItem(cart.id, "dec");
                      }}
                    >
                      ❌
                    </button>
                  </li>
                </ul>
              </div>
            );
          })}
        </>
      ) : (
        <li>hello worl</li>
      )}

      <div className="cart-footer">
        <span className="cart-total">
          Total: <b>{total}</b>
        </span>
        <button className="cart-checkout-btn" disabled>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
