import React from "react";
import { data } from "../components/contestantData";

const LeaderboardComponent = () => {
  return (
    <div className="grid grid-flow-row h-screen w-[100%] mt-7">
      {data.map((item, index) => (
        <div key={index}>
          <div className="grid grid-flow-col justify-between mx-[7%]">
            <p className="m-0">{item.rank}</p>
            <p className="m-0">{item.name}</p>
            <p className="m-0">{item.voteCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardComponent;
