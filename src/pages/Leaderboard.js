import React from "react";
import Navbar from "../components/Navbar";
import LeaderboardComponent from "../components/LeaderBoardData";

const Leaderboard = () => {
  return (
    <div className="flex flex-col text-white">
      <Navbar />
      <h1 className="text-white self-center text-[1.5rem]">Leaderboard</h1>
        <LeaderboardComponent />
    </div>
  );
};
export default Leaderboard;
