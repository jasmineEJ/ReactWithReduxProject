import React, { useState } from "react";
import "./home.css";

import FlightSearch from "../flights/FlightSearch";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setSearchInput(prevSearchInput => ({
      ...prevSearchInput,
      [name]: value
    }));
  };
  return <FlightSearch handleChange={handleChange} searchInput={searchInput} />;
};

export default HomePage;
