import React from "react";

function ResultNotFound() {
  return (
    <div className="no-results-container">
      <h2 className="no-results-heading">Result Not Found</h2>
      <p className="no-results-description">
        We couldn't find any books matching your search. Please try again with a
        different keyword.
      </p>
    </div>
  );
}

export default ResultNotFound;
