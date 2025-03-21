import React, { useState } from "react";

export default function ScoreCard({ onRestart }) {
  const [teamA, setTeamA] = useState({
    "Virat Kohli": { Runs: 0, Balls: 0, StrikeRate: 0, Over: 0, Wicket: 0 },
    "Rohit Sharma": { Runs: 0, Balls: 0, StrikeRate: 0, Over: 0, Wicket: 0 },
  });

  const [teamB, setteamB] = useState({
    "Jasprit Bumrah": { Runs: 0, Balls: 0, StrikeRate: 0, Over: 0, Wicket: 0 }
  })
  //console.log(teamA[Object.keys(teamA)[0]].Runs)
  const [Runs, setRuns] = useState(0);
  const [Wicket, setWicket] = useState(0);
  const [isWicket, setIsWicket] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [extras, setExtras] = useState({
    wide: false,
    noBall: false,
    pen: false,
    lb_b: false,
  });

  const toggleExtra = (key) => {
    setExtras((prev) => ({
      ...prev,
      [key]: !prev[key], 
    }));
  };


  const addRuns = (event) => {
    const incr = parseInt(event.target.innerText);
    console.log("Increment:", incr);
  
    if (extras && Object.keys(extras).some((key) => extras[key])) {
      const selectedExtras = Object.keys(extras).filter((key) => extras[key]);
  
      console.log("Selected Extras:", selectedExtras);
  
      if (selectedExtras.includes("pen") || selectedExtras.includes("lb_b")) {
        setRuns((prevRuns) => prevRuns + incr);
      } else {
        setRuns((prevRuns) => prevRuns + incr + 1);
      }
  
      setExtras((prevExtras) =>
        Object.fromEntries(Object.keys(prevExtras).map((key) => [key, false]))
      );
    } else {
      console.log("Striker Element Content:", document.querySelector("#Striker"));
      setRuns((prevRuns) => prevRuns + incr);
    }
  };
  

  const addWicket = () => {
    setWicket((prevWicket) => prevWicket + 1);
    setIsWicket(false); // This will now work
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
      <div
        className="d-flex flex-column border border-danger border-2 p-1 border-rounded"
        style={{ height: "89vh" }}
      >
        <h1 className="text-center my-2 responsive-text">Score Card</h1>
        <div className="scoreCard d-flex flex-column border border-dark border-2 w-100 h-51 mb-1">
          <div className="score d-flex flex-column">
            <h6 className="responsive-text text-wrap">Team A</h6>
            <h5 className="responsive-text text-wrap">
              {Runs}/{Wicket}
            </h5>
          </div>
          <div className="batsMan table-responsive border-bottom border-dark border-2">
            <h6 className="responsive-text fw-bold text-dark">Batsman</h6>
            <table
              className="table border-1 m-0"
              style={{ fontSize: "0.75rem" }}
            >
              <thead className="">
                <tr>
                  <th className="responsive-text">Batsman Name</th>
                  <th className="responsive-text">Runs</th>
                  <th className="responsive-text">Balls</th>
                  <th className="responsive-text">Strike Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr id="Striker">
                  <td className="responsive-text" >{Object.keys(teamA)[0]}</td>
                  <td className="responsive-text">{teamA[Object.keys(teamA)[0]].Runs}</td>
                  <td className="responsive-text">{teamA[Object.keys(teamA)[0]].Balls}</td>
                  <td className="responsive-text">{teamA[Object.keys(teamA)[0]].StrikeRate}</td>
                </tr>
                <tr>
                <td className="responsive-text" id="Non-Striker">{Object.keys(teamA)[1]}</td>
                  <td className="responsive-text">{teamA[Object.keys(teamA)[1]].Runs}</td>
                  <td className="responsive-text">{teamA[Object.keys(teamA)[1]].Balls}</td>
                  <td className="responsive-text">{teamA[Object.keys(teamA)[1]].StrikeRate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bowler table-responsive">
            <h7 className="responsive-text fw-bold text-dark">Bowler</h7>
            <table
              className="table border-1 m-0"
              style={{ fontSize: "0.75rem" }}
            >
              <thead>
                <tr>
                  <th className="responsive-text">Bowler Name</th>
                  <th className="responsive-text">Over</th>
                  <th className="responsive-text">Runs</th>
                  <th className="responsive-text">Wicket</th>
                  <th className="responsive-text">Economy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="responsive-text">Jassi</td>
                  <td className="responsive-text">1.5</td>
                  <td className="responsive-text">16</td>
                  <td className="responsive-text">2</td>
                  <td className="responsive-text">8.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="functions d-flex border border-danger border-2 h-50">
          <div
            className="addRuns border border-success m-1 d-flex custom-flex"
            style={{ width: "55%" }}
          >
            <div className="perBall border-secondary d-flex flex-column custom-width2">
              <div className="btn1 d-flex flex-wrap justify-content-around align-items-center border border-dark h-50 m-1">
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  0
                </button>
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  1
                </button>
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  2
                </button>
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  3
                </button>
              </div>
              <div className="btn1 d-flex flex-wrap justify-content-around align-items-center border border-dark h-50 m-1">
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  4
                </button>
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  5
                </button>
                <button
                  className="btn custom-btn runbtn bgGradient2 border border-dark h-50 p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "50px" }}
                  onClick={addRuns}
                >
                  6
                </button>
                <div
                  class="form-check custom-btn bgGradient2 h-50 d-flex justify-content-center align-items-center border border-dark rounded"
                  style={{ width: "50px" }}
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={isWicket}
                    onChange={() => setIsWicket(!isWicket)}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Wkt
                  </label>
                </div>
              </div>
            </div>
            <div className="extra d-flex w-25 flex-column">
              <div className="btn1 d-flex flex-wrap justify-content-around align-items-center border border-dark h-50 m-1">
                <div
                  className="form- custom-btncheck bgGradient2 border border-dark rounded d-flex justify-content-center align-items-center"
                  style={{ width: "60px", height: "50px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate1"
                    checked={extras.wide}
                    onChange={() => toggleExtra("wide")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate1"
                  >
                    Wide
                  </label>
                </div>
                <div
                  className="form- custom-btncheck bgGradient2 border border-dark rounded d-flex justify-content-center align-items-center"
                  style={{ width: "60px", height: "50px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate2"
                    checked={extras.noBall}
                    onChange={() => toggleExtra("noBall")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate2"
                  >
                    No Ball
                  </label>
                </div>
              </div>
              <div className="btn1 d-flex flex-wrap justify-content-around align-items-center border border-dark h-50 m-1">
                <div
                  className="form- custom-btncheck bgGradient2 border border-dark rounded d-flex justify-content-center align-items-center"
                  style={{ width: "60px", height: "50px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate3"
                    checked={extras.pen}
                    onChange={() => toggleExtra("pen")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate3"
                  >
                    PEN
                  </label>
                </div>
                <div
                  className="form- custom-btncheck bgGradient2 border border-dark rounded d-flex justify-content-center align-items-center"
                  style={{ width: "60px", height: "50px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate43"
                    checked={extras.lb_b}
                    onChange={() => toggleExtra("lb_b")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate43"
                  >
                    LB/B
                  </label>
                </div>
              </div>
            </div>
            <div className="inBall border border-success m-1">
              <h6 className="text-dark fw-bold text-center custom-width-3">
                This Over:
              </h6>
            </div>
          </div>
          <div
            className="typeOut border border-success m-1 d-flex flex-column"
            style={{ width: "45%" }}
          >
            <div className="btn1 d-flex flex-wrap justify-content-around align-items-center border border-dark h-50 m-1">
              <button
                className="btn runbtn bgGradient2 border border-dark p-1 d-flex align-items-center justify-content-center fw-bold custom-hw"
                disabled={!isWicket}
                onClick={addWicket}
              >
                Bowled
              </button>
              <button
                className="btn runbtn bgGradient2 border border-dark p-1 d-flex align-items-center justify-content-center fw-bold custom-hw"
                disabled={!isWicket}
                onClick={addWicket}
              >
                Caught
              </button>
              <button
                className="btn runbtn bgGradient2 border border-dark p-1 d-flex align-items-center justify-content-center fw-bold custom-hw"
                disabled={!isWicket}
                onClick={addWicket}
              >
                Stumping
              </button>
            </div>
            <div className="btn1 d-flex flex-wrap justify-content-around align-items-center border border-dark h-50 m-1">
              <button
                className="btn runbtn bgGradient2 border border-dark p-1 d-flex align-items-center justify-content-center fw-bold custom-hw"
                disabled={!isWicket}
                onClick={addWicket}
              >
                Run-Out
              </button>
              <button
                className="btn runbtn bgGradient2 border border-dark p-1 d-flex align-items-center justify-content-center fw-bold custom-hw"
                disabled={!isWicket}
                onClick={addWicket}
              >
                Leg Before
              </button>
              <button
                className="btn runbtn bgGradient2 border border-dark p-1 d-flex align-items-center justify-content-center fw-bold custom-hw"
                disabled={!isWicket}
                onClick={addWicket}
              >
                Hit-Wicket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
