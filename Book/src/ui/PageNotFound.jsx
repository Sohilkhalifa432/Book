import React from "react";

function PageNotFound() {
  return (
    <div className="pagenotfound-container">
      <h1 className="pagenotfound-404">404</h1>
      <h2 className="pagenotfound-title">Page Not Found</h2>
      <p className="pagenotfound-desc">
        Oops! The page you are looking for doesn't exist.
        <br />
        It might have been moved or deleted.
      </p>
      <a href="/" className="pagenotfound-home-btn">
        Go to Home
      </a>
    </div>
  );
}

export default PageNotFound;
