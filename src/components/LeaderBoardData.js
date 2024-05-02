import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const LeaderboardComponent = () => {
  const [contestants, setContestants] = useState([]);

  useEffect(() => {
    const fetchContestantData = async () => {
      try {
        const contestantsRef = db.collection("contestants");
        const snapshot = await contestantsRef.get();

        if (!snapshot.empty) {
          const fetchedContestants = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContestants(fetchedContestants);
        } else {
          console.log('No contestants found in Firestore.');
        }
      } catch (error) {
        console.error('Error fetching contestants from Firestore:', error);
      }
    };

    fetchContestantData();

    const parseUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get("name");
      const vote = parseInt(urlParams.get("votes"), 10) || 0;
      return { name, vote };
    };

    const updateData = async ({ name, vote }) => {
      try {
        const contestantsRef = db.collection("contestants");
        const snapshot = await contestantsRef.where("name", "==", name).get();

        if (snapshot.empty) {
          // If contestant does not exist, add new contestant
          await contestantsRef.add({ name, voteCount: vote });
        } else {
          // If contestant exists, update vote count
          snapshot.forEach((doc) => {
            const contestantDocRef = contestantsRef.doc(doc.id);
            contestantDocRef.update({
              voteCount: doc.data().voteCount + vote,
            });
          });
        }
      } catch (error) {
        console.error("Error updating contestant data:", error);
      }
    };

    const { name, vote } = parseUrlParams();
    if (name) {
      updateData({ name, vote });
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="grid grid-flow-row h-screen w-full mt-7">
      <div className="grid grid-flow-col justify-evenly lg:justify-between mx-7">
        <h3>Contestant</h3>
        <h3>Votes</h3>
        <h3>Rank</h3>
      </div>
      {contestants.map((item, index) => (
        <div key={item.id} className="grid grid-flow-col gap-auto items-center justify-between mx-7 text-center">
          <p className="m-0">{item.name}</p>
          <p className="m-0">{item.voteCount}</p>
          <p className="m-0">{index + 1}</p> {/* Simplistic ranking based on array order */}
        </div>
      ))}
    </div>
  );
};

export default LeaderboardComponent;
