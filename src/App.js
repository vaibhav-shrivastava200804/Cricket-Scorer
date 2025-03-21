import React, { useState } from "react";
import "./app.css";
import GetStarted from "./components/GetStarted";
import TeamInfo from "./components/TeamInfo";
import TossInfo from "./components/TossInfo";
import BatBowl from "./components/BatBowl";
import ScoreCard from "./components/ScoreCard";

import { Routes, Route, useNavigate } from "react-router";
import { atom } from "jotai";

// {
//   name: "",
//   players: [
//     {
//       name: "", 
//       Runs: 0, 
//       Balls: 0, 
//       StrikeRate: 0, 
//       Over: 0, 
//       Wicket: 0
//     }
//   ]
// }

export const teamsAtom = atom([])


const App = () => {
  const navigate = useNavigate();

  return (<Routes>
    <Route index element={<GetStarted onNext={() => navigate("team-info")} />} />
    <Route path="team-info" element={<TeamInfo onNext={() => navigate("toss-info")} />} />
    <Route path="toss-info" element={<TossInfo onNext={() => navigate("bat-bowl")} />} />
    <Route path="bat-bowl" element={<BatBowl onNext={() => navigate("score-card")} />} />
    <Route path="score-card" element={<ScoreCard onRestart={() => navigate("/")} />} />
    
  </Routes>)

  // return (
  //   <>
  //     {currentStep === "getStarted" && (
  //       <GetStarted onNext={() => handleNext("TeamInfo")} />
  //     )}
  //     {currentStep === "TeamInfo" && (
  //       <TeamInfo onNext={() => handleNext("TossInfo")} />
  //     )}
  //     {currentStep === "TossInfo" && (
  //       <TossInfo onNext={() => handleNext("BatBowl")} />
  //     )}
  //     {currentStep === "BatBowl" && (
  //       <BatBowl onNext={() => handleNext("scoreCard")} />
  //     )}
  //     {currentStep === "scoreCard" && (
  //       <ScoreCard onRestart={() => handleNext("getStarted")} />
  //     )}
  //   </>
  // );
};

export default App;
