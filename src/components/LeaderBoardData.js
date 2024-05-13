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

  // Sort the contestants array in descending order based on voteCount
  const sortedContestants = [...contestants].sort((a, b) => b.voteCount - a.voteCount);

  return (
    <div className="grid grid-flow-row h-[fit-content] w-[85%] mx-auto px-6 py-3 items-start mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="">
            <th className="px-4 py-2 text-left">Contestant</th>
            <th className="px-4 py-2 text-center">Votes</th>
            <th className="px-4 py-2 text-center">Rank</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3" className="text-center py-4">Loading...</td>
            </tr>
          ) : sortedContestants.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-4">No votes yet. Go and vote for your favorite contestant!</td>
            </tr>
          ) : (
            sortedContestants.map((contestant, index) => (
              <tr key={contestant.id} className={index % 2 === 0 ? '' : ''}>
                <td className="px-4 py-2">{contestant.name}</td>
                <td className="px-4 py-2 text-center">{contestant.voteCount}</td>
                <td className="px-4 py-2 text-center">{index + 1}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <p className="text-start mt-6 text-gray-300">Your votes will show up shortly! Meanwhile, go vote more!</p>
    </div>
  );
};

export default LeaderboardComponent;
