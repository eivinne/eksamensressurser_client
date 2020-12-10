import React, { useState, useEffect } from 'react';
import { HomeHeader, ArticleWrapper,DetailedArticle } from '../styles/StyledComponents';
import UpdateArticleComponent from './UpdateArticleComponent';
import {removeArticle} from '../utils/eventService.js';

import { Cookies, useCookies } from 'react-cookie';

const ViewArticleDetailComponent = ({ anArticle, articles, back }) => {

    const thisArticle = anArticle;
    const [articleList, setArticleList] = useState(articles);
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [isArticleBeingEdited, setIsArticleBeingEdited] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    let isEditButtonAdmin ="";
    let isDeleteButtonAdmin ="";

    const handleUpdate = (article) => {
        setIsArticleBeingEdited(true);
    };



    const handleDelete = async () => {
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

    if(cookies.role == "Admin"){
        isEditButtonAdmin = "editButton-visible";
        isDeleteButtonAdmin = "deleteButton-visible";
    }else{
        isEditButtonAdmin = "editButton-hidden";
        isDeleteButtonAdmin = "deleteButton-hidden";
    } 

    if(!isArticleBeingEdited) {

        return (
            <>
            
            {thisArticle && <HomeHeader>{thisArticle.tittel}</HomeHeader>}
            <DetailedArticle>
            <button className="backbutton" onClick={back}>Gå tilbake til artikler</button>
            </DetailedArticle>
            {thisArticle && <ArticleWrapper>
            <h4 className="forfatter">Av {thisArticle.forfatter}</h4>
            <h4 className="dato">{thisArticle.dato}</h4>
            <p>{thisArticle.ingress}</p>
            <h2>{thisArticle.tittel}</h2>
            <p>{thisArticle.innhold}</p>
            <button className={isEditButtonAdmin} onClick={handleUpdate}>Rediger</button>
            <button className={isDeleteButtonAdmin} onClick={handleDelete}>Slett</button>
          
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