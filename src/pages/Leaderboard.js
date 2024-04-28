import React from "react";
import Navbar from "../components/Navbar";
import LeaderboardComponent from "../components/LeaderBoardData";

const leaderboardTable = [
  {
    rank: 1,
    name: "Miles Morales",
    voteCount: 200000,
  },
  {
    rank: 2,
    name: "Johnny Bravo",
    voteCount: 189294,
  },
  {
    rank: 3,
    name: "Iris West",
    voteCount: 132895,
  },
  {
    rank: 4,
    name: "Freya Stone",
    voteCount: 109845,
  },
  {
    rank: 5,
    name: "Niklaus Michaelson",
    voteCount: 129366,
  },
  {
    rank: 6,
    name: "Jack Ryan",
    voteCount: 98595,
  },
  {
    rank: 7,
    name: "Bruce Wayne",
    voteCount: 90121,
  },
  {
    rank: 8,
    name: "Jon Snow",
    voteCount: 90084,
  },
  {
    rank: 9,
    name: "Bobby Tarantino",
    voteCount: 89456,
  },
  {
    rank: 10,
    name: "Chandler Bing",
    voteCount: 89245,
  },
  {
    rank: 11,
    name: "Louis Litt",
    voteCount: 67898,
  },
  {
    rank: 12,
    name: "Hannah Baker",
    voteCount: 61843,
  },
  {
    rank: 13,
    name: "Bryce Hall",
    voteCount: 59850,
  },
  {
    rank: 14,
    name: "Amandla Steinberg",
    voteCount: 52004,
  },
  {
    rank: 15,
    name: "Alessia Cara",
    voteCount: 49670,
  },
  {
    rank: 16,
    name: "Fran Fine",
    voteCount: 49623,
  },
];

const Leaderboard = () => {
  return (
    <div className="flex flex-col text-white">
      <Navbar />
      <h1 className="text-white self-center text-[1.5rem]">Leaderboard</h1>
      <LeaderboardComponent leaderboardTable={leaderboardTable} />
    </div>
  );
};
export default Leaderboard;
