import React from "react";
import "./utility.css";
import TeamInfo from "./TeamInfo";
import { teamsAtom } from "../App"
import {useSetAtom} from "jotai"

function GetStarted({ onNext }) {
  const setTeams = useSetAtom(teamsAtom)

  const addTeams = () => {
    const inputValue1 = document.getElementById("team1").value
    const inputValue2 = document.getElementById("team2").value
    setTeams([
      {
        name: inputValue1.trim(),
        players: []
      },
      {
        name: inputValue2.trim(),
        players: []
      }
    ])
  }

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
      <div className="d-flex justify-content-center align-items-center" style={{height:"91vh"}}>
        <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-primary p-2 mb-2 border-opacity-25 rounded border-2 custom-width custom-border bgGradient blur">
          <h1 style={{ color: "#001D4A" }} className="my-3 text-center">
            ENTER THE TEAMS NAME
          </h1>
            <div className="input-group my-1 custom-width">
              <input
                id="team1"
                type="text"
                className="form-control blurred-input"
                placeholder="Team 1 Name"
                aria-label="Team 1 Name"
              />
            </div>
          <div className="input-group my-1 custom-width">
            <input
              id="team2"
              type="text"
              className="form-control blurred-input"
              placeholder="Team 2 Name"
              aria-label="Team 2 Name"
            />
          </div>
          <button
            className="text-center btn btn-outline-success fw-bold my-3 blur"
            onClick={() => {
              addTeams()
              onNext()
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
