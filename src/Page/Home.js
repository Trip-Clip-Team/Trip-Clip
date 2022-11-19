import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeMap from "../images/home-tile.jpeg";
import AdvAwaits from "../images/travel-btm.png";
import TravelHome from "../images/travel-home.png";
import Axios from "axios";
import "../CSS/home.css";

export default function Home() {
  const [randomPlace, setRandomPlace] = useState(null);

  const handleClick = async () => {
    const result = await Axios.get("https://restcountries.eu/rest/v2/all");
    setRandomPlace(
      result.data[parseInt((Math.random() * 1000) % result.data.length)]
    );
  };

  return (
    <>
      <div className="home-container">
        <div className="tile-container">
          <div className="tile-image-container">
            <img className="tile-image" src={HomeMap} alt="tile" />
          </div>
          <div className="tile-contents-wrapper">
            <Link to="/map" className="tile-map-link">
              <div className="tile-contents">
                <span className="tile-heading">Browse The Map</span>
                <p className="tile-para">Places give a reviews.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="tile-container">
          <div className="tile-contents-wrapper">
            <button className="tile-map-btn" onClick={handleClick}></button>
          </div>
          <div className="tile-image-container">
            <img className="tile-image" src={TravelHome} alt="tile" />
          </div>
        </div>
      </div>
      {randomPlace && (
        <div className="btm-container">
          <span className="btm-heading">
            Pack your bags you'll be visiting {randomPlace.name} this time!
          </span>
          <img src={AdvAwaits} alt="adv" className="image-btm" />
        </div>
      )}
    </>
  );
}
