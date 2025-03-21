import React, { useState } from "react";
import {useAtom} from "jotai"
import { teamsAtom } from "../App"
import "./utility.css";

export default function TeamInfo({ onNext }) {
  // const [team1, setteam1] = useState([]);
  // const [team2, setteam2] = useState([]);

  const [teams, setTeams] = useAtom(teamsAtom)

  const team1 = teams[0]
  const team2 = teams[1]

  const [playerName, setPlayerName] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  const tempTeams = [...teams]
  const addPlayer1 = () => {
    if (playerName.trim() !== "") {
      const teamTeam1 = {...team1}
      if (teamTeam1.players) {
        teamTeam1.players.push({
          name: playerName, 
          Runs: 0, 
          Balls: 0, 
          StrikeRate: 0, 
          Over: 0, 
          Wicket: 0
        })
        
        tempTeams[0] = teamTeam1
        setTeams(tempTeams)
        
        // setteam1((prevTeam) => [...prevTeam, playerName]); // Update state immutably
        setPlayerName(""); // Clear the input field
        console.log(team1);
      }
    }
  };

  const addPlayer2 = () => {
    if (playerName2.trim() !== "") {
      const teamTeam2 = {...team2}
      if (teamTeam2.players) {
        teamTeam2.players.push({
          name: playerName2, 
          Runs: 0, 
          Balls: 0, 
          StrikeRate: 0, 
          Over: 0, 
          Wicket: 0
        })

        
        tempTeams[1] = teamTeam2
        setTeams(tempTeams)
        
        // setteam1((prevTeam) => [...prevTeam, playerName]); // Update state immutably
        setPlayerName2(""); // Clear the input field
        console.log(team2);
      }

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
    <h2 className="text-center">Enter the players Details Here</h2>
      <div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
        <ol className="list-group list-group-numbered blur" start="1">
          <li className="fw-bold" style={{color:"#001d4a"}}>Team 1 Details Below:</li>
          {team1?.players?.map((player) => (
            <li key={player?.name} className="list-group-item bgGradient2 border border-light" style={{color:"#001d4a"}}>
              {player.name}
            </li>
          ))}
        </ol>
        <div className="d-flex flex-column justify-content-center align-items-center mx-5 border border-primary p-2 mb-2 border-opacity-25 rounded border-2 custom-width custom-border bgGradient">
          <h2 style={{ color: "#001d4a" }} className="text-center">Enter Team Members Name Below:</h2>
          <div className="input-group mb-3 d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control-sm"
              placeholder={`Add Player for ${team1?.name}`}
              aria-label="Add Player for team 1"
              aria-describedby="button-addon2"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary fw-bold border border-dark rounded btn-sm"
              type="button"
              id="button-addon2"
              onClick={addPlayer1}
            >
              Add Player
            </button>
          </div>
          <div className="input-group mb-3 d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control-sm"
              placeholder={`Add Player for ${team2?.name}`}
              aria-label="Add Player for team 2"
              aria-describedby="button-addon2"
              value={playerName2}
              onChange={(e) => setPlayerName2(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary fw-bold border border-dark rounded btn-sm"
              type="button"
              id="button-addon2"
              onClick={addPlayer2}
            >
              Add Player
            </button>
          </div>
          <div className="input-group mb-3 d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control-sm"
              placeholder="Enter Number of Overs"
              aria-label="Enter Number of Overs"
              aria-describedby="button-overs"
            />
            <button
              className="btn btn-outline-secondary fw-bold border border-dark rounded btn-sm"
              type="button"
              id="button-overs"
            >
              Confirm
            </button>
          </div>
          <div className="">
            <button
              className="text-center btn btn-outline-primary fw-bold btn-sm"
              onClick={onNext}
            >
              Move Forward &rarr;
            </button>
          </div>
        </div>
        <ol className="list-group list-group-numbered blur" start="1">
        <li className="fw-bold" style={{color:"#001d4a"}}>Team 2 Details Below:</li>
          {team2?.players?.map((player) => (
            <li key={player?.name} className="list-group-item bgGradient2 border border-light" style={{color:"#001d4a"}}>
              {player.name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
