import React from "react";
import Navbar from "../components/Navbar";
import LeaderboardComponent from "../components/LeaderBoardData";

const Leaderboard = () => {
  return (
    <div className="flex flex-col text-white">
      <Navbar />
      <h1 className="text-white self-center text-[1.5rem]">Leaderboard</h1>
      <div>
        <div className="w-full flex justify-between pl-44 pr-44">
          <h3>Rank</h3>
          <h3>Name</h3>
          <h3>Votes</h3>
        </div>
        <LeaderboardComponent />
      </div>
    </div>
  );
};
export default Leaderboard;
