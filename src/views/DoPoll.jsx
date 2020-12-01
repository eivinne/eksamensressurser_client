import React, { useState, useEffect } from 'react';
import DoPollComponent from '../components/DoPollComponent';
import { UndetailedPollSection } from '../styles/StyledComponents';
import { get } from '../utils/eventService';


const DoPoll = props => {

  const [poll, setPoll] = useState(null);
  const [error, setError] = useState(null);

  const [pollId, setPollId] = useState('');

  const [showForm, setShowForm] = useState(false);

  const handleInput = (e) => {
    let input = e.target.value;
    setPollId(input);
  };

  const fetchPoll = async () => {
    if (pollId) {
      const { data, error } = await get(pollId);
      setShowForm = !showForm;
      if (error) {
        setError("Poll not found");
      }
      else {
        setPoll(data);
        setError(null);
      }
    }
    else{
      setError(null);
    }
  }


  return (
    <div>
      <h3>Do Poll View</h3>
      <input type='text' value={pollId} onChange={handleInput} />
      <button onClick={fetchPoll}>Søk</button>
      {error && <h1>{error}</h1>}
      {poll && <DoPollComponent setPoll={setPoll} poll={poll}/> }
      {showForm && (<UndetailedPollSection />)}
    </div>

  );
};

export default DoPoll;