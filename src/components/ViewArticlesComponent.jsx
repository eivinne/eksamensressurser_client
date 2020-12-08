import React, { useState } from 'react';
import { HomeHeader, ArticleWrapper, ArticleListElement, ArticleListWrapper } from '../styles/StyledComponents';
import ViewArticleDetailComponent from './ViewArticleDetailComponent';

const ViewArticlesComponent = ({ articleList, showArticle }) => {

    const allArticles = articleList;
    const [showArticleDetail, setShowArticleDetail] = useState(showArticle);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const showArticleView = (id) => {
        allArticles.map( (article) => {
            if(article._id == id) {
                setSelectedArticle(article);
                setShowArticleDetail(true);
            }
        })
    };

    const backToArticles = () => {
        setShowArticleDetail(false);
    }


    return (
        <>
        {!showArticleDetail && <HomeHeader>Fagartikler</HomeHeader>}
        {!showArticleDetail && <ArticleListWrapper>
            {false && allArticles.map( (article) => {
                return(
                    <ArticleListElement onClick={() => showArticleView(article._id)} >
                        <div>bilde</div>
                        <h2>{article.tittel}</h2>
                        <h4>{article.kategori}</h4>
                        <p>{article.ingress}</p>
                    </ArticleListElement>
                );
            })}
        </ArticleListWrapper>}
        {showArticleDetail && <ViewArticleDetailComponent anArticle={selectedArticle} back={backToArticles}></ViewArticleDetailComponent>}
        </>

    )
};
     //   }

export default ViewArticlesComponent;


/*






import React from "react";
import {UndetailedPollSection, UndetailedPollSectionWrapper} from '../styles/StyledComponents';
import 'dotenv/config'

const UndetailedPollComponent = ({polls}) => {
    const pollsFetched = [...polls];



    const doPoll = (name) =>{
        localStorage.setItem('latestPollName', name);
        window.location="/dopoll";
    }


    return (
        <UndetailedPollSectionWrapper >{pollsFetched.map((poll) => {
            return <UndetailedPollSection onClick={() => doPoll(poll.pollName)}>
                <h2 key={poll._id}>{poll.pollName}</h2>
                <ul>
                    {poll.questions.map((question) => {
                        return <div key={question.id}>
                            <h4>{question.questionDescription}</h4>
                            <ul>
                                {question.answers.map((answer) => {
                                    return <li key={answer.id}>
                                        {answer.answerDescription} votes: {answer.voteCount}
                                    </li>
                                })}
                            </ul>
                        </div>
                    })}
                </ul>
            </UndetailedPollSection>
        })}
        </UndetailedPollSectionWrapper>
    )
}

export default UndetailedPollComponent;*/