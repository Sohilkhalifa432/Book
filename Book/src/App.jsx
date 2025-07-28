import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Service from "./components/Service";
import AppLayout from "./ui/AppLayout";
import About from "./components/About";
import PageNotFound from "./ui/PageNotFound";
import { SearchProvider } from "./context/SearchContext";
import SearchResults from "./ui/SearchResults";
import BookPage from "./components/BookPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./ui/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <CartProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/search/:id" element={<SearchResults />} />
                <Route path="/book/:id" element={<BookPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </CartProvider>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
