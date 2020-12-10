import React, { useState, useEffect } from 'react';
import { HomeHeader, ArticleWrapper } from '../styles/StyledComponents';
import UpdateArticleComponent from './UpdateArticleComponent';
import {removeArticle} from '../utils/eventService.js';

const ViewArticleDetailComponent = ({ anArticle, articles, back }) => {

    const thisArticle = anArticle;
    const [articleList, setArticleList] = useState(articles);
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [isArticleBeingEdited, setIsArticleBeingEdited] = useState(false);

    const handleUpdate = (article) => {
        setIsArticleBeingEdited(true);
    };

    const handleDelete = () => {
        const sendDelete = async () => {
            const { data, error } = await removeArticle(thisArticle._id);
            if (error) {
                setMessage("Artikkel kunne ikke slettes");
                console.log(error)
            }
            else {
                setMessage("Artikkel " + thisArticle.tittel + " slettet");
                console.log(data)
                window.location = "/Articles";
            }
        }
        sendDelete();
    };

    if(!isArticleBeingEdited) {
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
            <button onClick={handleUpdate}>Rediger</button>
            <button onClick={handleDelete}>Slett</button>
            </ArticleWrapper>}
            </>

        )
    }
    else {
        return(
            <UpdateArticleComponent article={anArticle}></UpdateArticleComponent>
        )
    }
};

export default ViewArticleDetailComponent;