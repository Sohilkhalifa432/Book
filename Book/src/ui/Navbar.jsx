import { NavLink, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaBars, FaTimes } from "react-icons/fa"; // from Font Awesome
import Cart from "./Cart";

const styles = {
  cartButton: {
    padding: "6px 9px",
    backgroundColor: "#ff6b6b", // bright red-orange
    color: "#ffffff",
    border: "none",
    borderRadius: "50px", // makes circular shape possible
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(255, 0, 0, 0.2)", // light shadow
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // gap: "6px",
    transition: "all 0.3s ease-in-out",
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = () => {
    navigate("/cart");
  };

  function handleToggler() {
    setIsOpen(() => !isOpen);
  }

  // ⭐ Auto-close mobile menu on big screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // close mobile menu
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);

        setCart(parsed);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${isOpen ? "navbar-expanded" : ""}`}>
        <div className="navbar-logo">Book App</div>
        <ul className="navbar-links">
          <Search />

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Cart
            <button onClick={handleAddToCart} style={styles.cartButton}>
              {cart.length}
            </button>
          </li>
        </ul>
        <button
          className="hidden"
          onClick={handleToggler}
          onChange={(e) => setIsOpen(e.target.value)}
          style={{ padding: "10px 30px" }}
        >
          <FaBars size={12} color="#333" />
        </button>
        {isOpen && (
          <div className="mobile-link">
            <ul className="mobile-ul">
              <button
                onChange={(e) => setIsClose(e.target.value)}
                onClick={() => setIsOpen(false)}
                style={{ padding: "10px 30px", margin: "20px 0" }}
              >
                <FaTimes size={12} color="#333" />
              </button>
              <Search />

              <li className="mobile-a">home</li>
              <li className="mobile-a">about</li>
              <li className="mobile-a">service</li>
              <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                Cart
                <button onClick={handleAddToCart} style={styles.cartButton}>
                  {cart.length}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
