import React, { useState, useEffect } from 'react';
import { HomeHeader, ArticleWrapper } from '../styles/StyledComponents';

const ViewArticleDetailComponent = ({ anArticle, articles, back }) => {

    const thisArticle = anArticle;
    const [articleList, setArticleList] = useState(articles);
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);

    return (
        <>
        {thisArticle && <HomeHeader>{thisArticle.tittel}</HomeHeader>}
        <button onClick={back}>Gå tilbake til artikler</button>
        {thisArticle && <ArticleWrapper>
        <h4 className="forfatter">Av {thisArticle.forfatter}</h4>
        <h4 className="dato">{thisArticle.dato}</h4>
        <p>{thisArticle.ingress}</p>
        <h2>{thisArticle.tittel}</h2>
        <p>{thisArticle.innhold}</p>

        </ArticleWrapper>}
        </>

    )
};

export default ViewArticleDetailComponent;