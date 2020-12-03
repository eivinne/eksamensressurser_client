import React, { useState, useEffect } from 'react';
import UndetailedComponent from '../components/UndetailedPollComponent';
import { list } from '../utils/eventService.js';

const Home = () => {
  
  
  /*useEffect(() =>{
    const fetchData = async () => {
      const {data, error } = await list();
      if(error){
        setError(error);
      }
      else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);*/

  return (
    <div>
    </div>
  );
};

export default Home;