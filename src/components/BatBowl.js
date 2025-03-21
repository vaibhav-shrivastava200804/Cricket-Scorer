import React, { useState } from "react";
import "./utility.css"
import { useAtom } from "jotai";
import { teamsAtom } from "../App";


export default function BatBowl({ onNext }) {
  // Static players for teams, replace with dynamic data later.
  const [team1] = useState(["Player 1A", "Player 2A", "Player 3A", "Player 4A"]);
  const [team2] = useState(["Player 1B", "Player 2B", "Player 3B", "Player 4B"]);

  // States to store selected players
  const [striker, setStriker] = useState("");
  const [nonstriker, setNonstriker] = useState("");
  const [bowler, setBowler] = useState("");

  // Handle selection of players
  const handleStrikerSelection = (player) => {
    setStriker(player);
  };

  const handleNonstrikerSelection = (player) => {
    setNonstriker(player);
  };

  const handleBowlerSelection = (player) => {
    setBowler(player);
  };

  // Handle next button click
  const handleNextClick = () => {
    if (striker && nonstriker && bowler) {
      onNext(); // Move to the next step
      console.log(`Striker: ${striker}, Non-Striker: ${nonstriker}, Bowler: ${bowler}`);
    } else {
      alert("Please select a striker, non-striker, and bowler first.");
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#006992"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color: "wheat"}}>
            VScorer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color: "#EAF8BF"}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: "#EAF8BF"}}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: "#EAF8BF"}}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h3 className="text-center my-3">Select Players for Batting and Bowling</h3>
    <div className="container text-center d-flex justify-content-between align-items-center p-4 rounded lightBg w-90">

      {/* Team 1 - Batting Team (Striker and Non-Striker) */}
      <div className="p-3 m-1 border rounded bgGradient custom-width" style={{width:"30%"}}>
        <h4>Batting Team (Team A)</h4>

        <div className="">
          <h5 style={{color:"#001d4a"}}>Select Striker</h5>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="strikerDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ zIndex: 10 }}
            >
              {striker ? striker : "Select Striker"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="strikerDropdown">
              {team1.map((player, index) => (
                <li key={index}>
                  <a className="dropdown-item" onClick={() => handleStrikerSelection(player)}>
                    {player}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <h5 style={{color:"#001d4a"}}>Select Non-Striker</h5>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="nonstrikerDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ zIndex: 10 }}
            >
              {nonstriker ? nonstriker : "Select Non-Striker"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="nonstrikerDropdown">
              {team1.map((player, index) => (
                <li key={index}>
                  <a className="dropdown-item" onClick={() => handleNonstrikerSelection(player)}>
                    {player}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Team 2 - Bowling Team (Bowler) */}
      <div className="p-3 m-1 border rounded bgGradient custom-width" style={{width:"30%"}}>
        <h4>Bowling Team (Team B)</h4>
        <div className="">
          <h5>Select Opening Bowler</h5>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="bowlerDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ zIndex: 10 }}
            >
              {bowler ? bowler : "Select Bowler"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="bowlerDropdown">
              {team2.map((player, index) => (
                <li key={index}>
                  <a className="dropdown-item" onClick={() => handleBowlerSelection(player)}>
                    {player}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center my-3">
    <div className="p-3 border rounded bgGradient2 custom-width" style={{width:"30%"}}>
        <h5 style={{color:"#27476E"}}>Selected Players</h5>
        <p style={{color:"#27476E"}}>Striker: {striker}</p>
        <p style={{color:"#27476E"}}>Non-Striker: {nonstriker}</p>
        <p style={{color:"#27476E"}}>Bowler: {bowler}</p>
      </div>
        </div>
    <div className="mt-4 text-center">
        <button className="btn btn-outline-success" onClick={handleNextClick}>
          Move Forward &rarr;
        </button>
      </div>
    </>
  );
}
