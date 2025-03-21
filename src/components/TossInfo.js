import React, { useState } from "react";
import {useAtom} from "jotai"
import {teamsAtom} from '../App'

export default function TossInfo({ onNext }) {
  const [teams, setTeams] = useAtom(teamsAtom)

  const team1=teams[0]
  const team2=teams[1]

  const [selectedTeam, setSelectedTeam] = useState(""); // To store selected team

  // Handle team selection
  const handleSelectWinner = (team) => {
    setSelectedTeam(team.name);
  };

  // Handle next button click
  const handleNextClick = () => {
    if (selectedTeam) {
      // Call the onNext function when a team is selected
      onNext();
      console.log(`${selectedTeam} won the toss!`);
    } else {
      alert("Please select a team first.");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#006992" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "wheat" }}>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "#EAF8BF" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#EAF8BF" }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#EAF8BF" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2 className="text-center">Which Team Won The Toss</h2>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "60vh"}}>
        <div className="container text-center bgGradient w-50 border border-dark border-2 rounded ">
          <h3 className="my-2" style={{color:"#001d4a"}}>Select Toss Winner</h3>
          <div className="dropdown">
            <button
              className="btn btn-info dropdown-toggle my-2 fw-bold" style={{color:"#001d4a"}}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Toss Winner
            </button>
            <ul className="dropdown-menu" style={{background:"rgba(49, 210, 242, 0.84)"}}>
              <li className="border-bottom border-2">
                <button
                  className="dropdown-item my-1"
                  onClick={() => handleSelectWinner(team1)}
                  style={{background:"rgba(49, 210, 242, 0.84)"}}
                >
                  {team1.name}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item my-1"
                  onClick={() => handleSelectWinner(team2)}
                  style={{background:"rgba(49, 210, 242, 0.84)"}}
                >
                  {team2.name}
                </button>
              </li>
            </ul>
          </div>
          {selectedTeam && <h4 style={{color:"#001d4a"}}>{selectedTeam} won the toss!</h4>}
          <div className="mt-3 my-4">
            <button
              className="btn btn-success"
              onClick={handleNextClick}
            >
              Move Forward &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
