import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const LeaderboardComponent = () => {
  const [contestants, setContestants] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContestants = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'leaderboard'));
        const fetchedContestants = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContestants(fetchedContestants);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching contestants:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchContestants();
  }, []);

  const parseUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const votes = parseInt(urlParams.get('votes'), 10) || 0;
    return { name, votes };
  };

  const updateContestantVotes = async (name, votes) => {
    try {
      const contestantsRef = collection(db, 'leaderboard');
      const docRef = doc(contestantsRef, name.toLowerCase());
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        const newVoteCount = data.voteCount + votes;
        await updateDoc(docRef, { voteCount: newVoteCount });
        console.log(`Successfully updated votes for ${name}`);
      } else {
        await setDoc(docRef, { name, voteCount: votes });
        console.log(`Added new contestant: ${name}`);
      }

      navigate('/leaderboard');
    } catch (error) {
      console.error('Error updating contestant votes:', error);
    }
  };

  useEffect(() => {
    const { name, votes } = parseUrlParams();
    if (name) {
      updateContestantVotes(name, votes);
    }
  }, []);

  const sortedContestants = [...contestants].sort((a, b) => b.voteCount - a.voteCount);

  return (
    <div className="grid grid-flow-row h-[fit-content] w-[95%] px-6 py-3 self-center mt-4">
      <div className="grid grid-flow-col text-center items-center justify-between w-full p-2 mb-4">
        <h3>Contestant</h3>
        <h3>Votes</h3>
        <h3>Rank</h3>
      </div>
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : sortedContestants.length === 0 ? (
        <p className="text-center mt-4">No votes yet. Go and vote for your favorite contestant!</p>
      ) : (
        sortedContestants.map((contestant, index) => (
          <div key={contestant.id} className="grid grid-flow-col items-center text-center p-2 w-full justify-between">
            <p className="m-0 w-[20%]">{contestant.name}</p>
            <p className="mx-auto w-[20%]">{contestant.voteCount}</p>
            <p className="m-0 w-[20%]">{index + 1}</p>
          </div>
        ))
      )}
      <p className="text-start mt-10">Your votes will show up shortly! Meanwhile, go vote more!</p>
    </div>
  );
};

export default LeaderboardComponent;
