import React, { useState, useEffect } from 'react';
import { HomeHeader, ArticleWrapper, ArticleListElement, ArticleListWrapper } from '../styles/StyledComponents';
import CreateArticleComponent from './CreateArticleComponent';
import ViewArticleDetailComponent from './ViewArticleDetailComponent';
import PaginationBar from './PaginationBar';

const ViewArticlesComponent = ({ articleList, showArticle }) => {

    const allArticles = articleList.articles;
    const [filteredArticles, setFilteredArticles] = useState(allArticles);
    const [showArticleDetail, setShowArticleDetail] = useState(showArticle);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showNewArticle, setShowNewArticle] = useState(false);
    const [searchFrase, setSearchFrase] = useState("");
    const [chosenCategory, setChosenCategory] = useState("all");

    const showArticleView = (id) => {
        
        allArticles.map( (article) => {
            if(article._id == id) {
                setSelectedArticle(article);
                setShowArticleDetail(true);
            }
        })
    };
    const search = () => {
            setFilteredArticles(allArticles.filter(article => article.kategori.toLowerCase() === chosenCategory.toLowerCase() || (searchFrase && article.tittel.toLowerCase().includes(searchFrase.toLowerCase()))));
        }

    const backToArticles = () => {
        setShowArticleDetail(false);
    }

    const newArticle = () => {
        setShowNewArticle(!showArticle);
    };

    

    const handleSearch = (e) => {
        let searchValue = e.target.value;
        setSearchFrase(searchValue);
        search();
    }

    const handleChosenCategory = (e) => {
        let category = e.target.value;
        setChosenCategory(category);
        search();
        console.log(filteredArticles)
    }

    

    

    if(!showNewArticle) {
        return (
            <>
            {!showArticleDetail && <HomeHeader>Fagartikler</HomeHeader>}
            <button onClick={newArticle}>Ny artikkel</button>
            <input className="searchField" type="text" placeholder="Search.." onChange={handleSearch} value={searchFrase}></input>
            <select onClick={handleChosenCategory}>
                <option value="Kjøkken">Kjøkken</option>
                <option value="Bad">Bad</option>
                <option value="Hytte">Hytte</option>
            </select>
            <PaginationBar articles={articleList}></PaginationBar>
            {!showArticleDetail && <ArticleListWrapper>
                {filteredArticles.slice(0, 5).map( (article) => {
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

export default ViewArticlesComponent;