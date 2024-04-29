import React from "react";
import { data } from "../components/contestantData";

const LeaderboardComponent = () => {
  return (
    <div className="grid grid-flow-row h-screen w-[100%] mt-7">
      <div className="grid grid-flow-col justify-between mx-[7%]">
      <h3>Contestant</h3>
      <h3>Votes</h3>
      <h3>Rank</h3>
      </div>
      {data.map((item, index) => (
        <div key={index} className=" grid grid-flow-col gap-auto items-center justify-between mx-[7%] text-center">
            <p className="m-0">{item.name}</p>
            <p className="m-0">{item.voteCount}</p>
            <p className="m-0">{item.rank}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardComponent;
