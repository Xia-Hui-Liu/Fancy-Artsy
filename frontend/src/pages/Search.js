import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <div className="search-page">
      <Link to="/" className="back-arrow">
        <i className="fas fa-arrow-left" onClick={handleBackButton} /> <BiArrowBack /> Search
      </Link>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for items..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
      </div>
      <Link to="/" className="bottom-back-button">
        BACK
      </Link>
    </div>
  );
};

export default SearchPage;
