import React, { useState, useEffect } from 'react';
import ViewArticlesComponent from '../components/ViewArticlesComponent'
import { getAllArticles } from '../utils/eventService';

const Articles = props => {

  const [listOfArticles, setListOfArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() =>{
    const getArticles = async () => {
      const {data, error} = await getAllArticles();
      if(error){
        setError(error);
      }
      else {
        setListOfArticles(data);
      } 
    };
    getArticles();
  }, []);


  return (
    <ViewArticlesComponent></ViewArticlesComponent>
  );

};

export default Articles;