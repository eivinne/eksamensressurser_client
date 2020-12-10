import React, { useState, useEffect } from 'react';
import { HomeHeader, StyledArticleButtons, ArticleListElement, ArticleListWrapper } from '../styles/StyledComponents';
import CreateArticleComponent from './CreateArticleComponent';
import ViewArticleDetailComponent from './ViewArticleDetailComponent';
import PaginationBar from './PaginationBar';
import { useCookies} from 'react-cookie';
import { getAllArticles, getAllArticlesPaginated } from '../utils/eventService';


const ViewArticlesComponent = ({ articleList, showArticle, setPage, pageNum }) => {

    const [allArticles, setAllArticles] = useState(articleList.articles);
    const [articlesToBeLoaded, setArticlesToBeLoaded] = useState({});
    const [filteredArticles, setFilteredArticles] = useState(allArticles);
    const [showArticleDetail, setShowArticleDetail] = useState(showArticle);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showNewArticle, setShowNewArticle] = useState(false);
    const [searchFrase, setSearchFrase] = useState("");
    const [chosenCategory, setChosenCategory] = useState("all");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(['token']);


    let buttonAdmin ="";

    const showArticleView = (id) => {
        
        allArticles.map( (article) => {
            if(article._id == id) {
                setSelectedArticle(article);
                setShowArticleDetail(true);
            }
        })
    };

    const reloadArticles = (page) => {
        console.log("reloadArticles",page)
        const getArticles = async () => {
            const {data, error} = await getAllArticlesPaginated(page);
            console.log(data,error)
            if(error){
              setError(error);
            }
            else {
              setFilteredArticles(data.articles);
            } 
          };
          getArticles();
    }

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
    }

    if(cookies.role === "Admin"){
        buttonAdmin = "styledButton-visible";
        
    }else {
       buttonAdmin = "styledButton-hidden";
    }
    
    

    if(!showNewArticle) {
        
      
        return (
            <>
            {!showArticleDetail && <HomeHeader>Fagartikler</HomeHeader>}
            <StyledArticleButtons>
            <button className={buttonAdmin} onClick={newArticle}>Ny artikkel</button>
            <input className="searchField" type="text" placeholder="Search.." onChange={handleSearch} value={searchFrase}></input>
            <select className="styledSelect" onClick={handleChosenCategory}>
                <option value="Kjøkken">Kjøkken</option>
                <option value="Bad">Bad</option>
                <option value="Hytte">Hytte</option>
            </select>
            </StyledArticleButtons>
            <PaginationBar articles={articleList} setPage={setPage} reload={reloadArticles} pageNum={pageNum}></PaginationBar>
            {!showArticleDetail && <ArticleListWrapper>
                {filteredArticles && filteredArticles.map( (article) => {
                    return(
                        <ArticleListElement onClick={() => showArticleView(article._id)} >
                            <div className="wrapper">
                                <div className="left-Section">bilde</div>
                                <div className="right-section">
                                    <div className="heading-container">
                                    <h2>{article.tittel}</h2>
                                    <h4>{article.kategori}</h4>
                                    </div>
                                    <p>{article.ingress}</p>
                                </div>
                            </div>
                            
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