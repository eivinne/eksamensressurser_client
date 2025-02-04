import React, { useState, useEffect } from 'react';
import ViewArticleDetailComponent from '../components/ViewArticleDetailComponent';
import ViewArticlesComponent from '../components/ViewArticlesComponent'
import { getAllArticles } from '../utils/eventService';

const Articles = props => {

  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [showArticle, setShowArticle] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect( () => {
    const getArticles = async () => {
      const {data, error} = await getAllArticles();
      if(error){
        setError(error);
      }
      else {
        setArticles(data);
      } 
    };
    getArticles();
  }, []);

   
  return (
    <>
    {articles && <ViewArticlesComponent articleList={articles} showArticle={showArticle} setPage={setPageNumber} pageNumber={pageNumber}></ViewArticlesComponent>}
    </>
  );

};

export default Articles;