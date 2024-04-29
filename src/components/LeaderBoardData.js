import React, { useEffect } from "react";
import { data } from "../components/contestantData";

const LeaderboardComponent = () => {
  useEffect(() => {
    // Function to parse URL parameters
    const parseUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get("name");
      const votes = parseInt(urlParams.get("votes"), 10) || 0; // Parse votes as integer
      return { name, votes };
    };

    // Function to update the data array based on URL parameters
    const updateData = ({ name, votes }) => {
      // Create a copy of the data array
      const updatedData = [...data];

      // Find the contestant in the data array and update vote count
      const contestantIndex = updatedData.findIndex((item) => item.name === name);
      if (contestantIndex !== -1) {
        updatedData[contestantIndex].voteCount += votes;
      }

      // Assuming data is part of application state, update it globally
      // For example, dispatch action to update data in Redux store
      // This is just a demonstration, replace with your state management logic

      console.log("Updated Data:", updatedData); // Log the updated data array

      // Example: dispatch({ type: 'UPDATE_DATA', payload: updatedData });
    };

    // Parse URL parameters and update data on component mount
    const { name, votes } = parseUrlParams();
    updateData({ name, votes });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="grid grid-flow-row h-screen w-full mt-7">
      <div className="grid grid-flow-col justify-evenly lg:justify-between mx-7">
        <h3>Contestant</h3>
        <h3>Votes</h3>
        <h3>Rank</h3>
      </div>
      {data.map((item, index) => (
        <div key={index} className="grid grid-flow-col gap-auto items-center justify-between mx-7 text-center">
          <p className="m-0">{item.name}</p>
          <p className="m-0">{item.voteCount}</p>
          <p className="m-0">{item.rank}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardComponent;
