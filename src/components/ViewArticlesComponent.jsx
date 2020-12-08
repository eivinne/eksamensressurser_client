import React, { useState } from 'react';
import { HomeHeader, ArticleWrapper, ArticleListElement, ArticleListWrapper } from '../styles/StyledComponents';
import CreateArticleComponent from './CreateArticleComponent';
import ViewArticleDetailComponent from './ViewArticleDetailComponent';

const ViewArticlesComponent = ({ articleList, showArticle }) => {

    const allArticles = articleList;
    const [showArticleDetail, setShowArticleDetail] = useState(showArticle);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showNewArticle, setShowNewArticle] = useState(false);

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

    const newArticle = () => {
        setShowNewArticle(!showArticle);
    };

    

    if(!showNewArticle) {
    return (
        <>
        {!showArticleDetail && <HomeHeader>Fagartikler</HomeHeader>}
        <button onClick={newArticle}>Ny artikkel</button>
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
}
else {
    return (
        <>
        {showNewArticle && <CreateArticleComponent></CreateArticleComponent>}
        </>
    )
};
}
     //   }

export default ViewArticlesComponent;