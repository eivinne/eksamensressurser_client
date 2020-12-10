import styled from 'styled-components';

export const HomeHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbdbdb;
    width: 100%;
    height: 300px;
    font-size:30px;
    font-weight:bold;
`;

export const HomeSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2;
    grid-template-areas: 
    "leftsection rightsection rightsection rightsection"
    "lowersection lowersection lowersection lowersection";
    margin: 3em 5% 0 5%;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dbdbdb;
        background-color: #dbdbdb;
           
    }

    .gridBox1 {
        grid-area: leftsection;
        height: 300px;
        margin-right: 3em;
        font-size:30px;
        font-weight:bold;

    }

    .gridBox2 {
        grid-area: rightsection;
        height: 300px;
        font-size:30px;
        font-weight:bold;
    }

    .gridBox3 {
        grid-area: lowersection;
        height: 300px;
        margin-top: 3em;
        font-size:30px;
        font-weight:bold;
    }
    
`;

export const ArticleListWrapper = styled.article `
    display: grid;
`;

export const ArticleListElement = styled.li `
    position:relative;
    margin: 20px 20% 20px 20%;
    list-style: none;
    .wrapper {
        display:grid;
        background-color:white;
    }
    .left-section{
        display:inline-block!important;
        grid-column:1;
        grid-row:3;
        padding:20px;
        align-self:center;
        width:20px;
        height:20px;
        background-color:black;
        
    }

    .right-section{
        grid-column:2;
        grid-row:1;

    }

    .heading-container{
        
    }
    

    h2{
        float:left;
        font-size:35px;
    }

    h4{
        float:right;
        font-size:18px;
    }

    p{
       float:left;
       font-size:20px;
       text-align:left;
    }

   
`;

export const ArticleWrapper = styled.article`
    margin: 0 20% 0 20%;

    .deleteButton-visible{
        background-color:#d14140;
        font-size:25px;
        padding:20px;
        color:white;
        border:0px solid white;
        margin:20px;
        visibility:visible;
    }
    .deleteButton-hidden{
        visibility:hidden;
    }

    .deleteButton-visible:hover{
        opacity:0.5; 
    }
    .editButton-visible{
        background-color:#adad44;
        font-size:25px;
        padding:20px;
        color:white;
        border:0px solid white;
        margin:20px;
        visibility:visible;

    }
    .editButton-visible:hover{
        opacity:0.5;
    }

    .editButton-hidden{
        visibility:hidden;
    }

`;

export const DetailedArticle = styled.section`
    .backbutton{
       
        background-color:#75bcd8;
        font-size:25px;
        padding:20px;
        color:white;
        border:0px solid white;
        margin:20px;
    }
    .backbutton:hover{
        opacity:0.5;
    }
        
`;



export const StyledArticleButtons = styled.section`
    width:100%;
    display:block;
    padding:20px;
    font-size:30px;

    .styledButton-visible{
        background-color:#75bcd8;
        font-size:25px;
        padding:20px;
        color:white;
        border:0px solid white;
        margin:20px;
        visibility:visible;

    }
    .styledButton-visibe:hover{
        background-color:#8fd6d6;
    }


    .styledButton-hidden{
        background-color:#75bcd8;
        font-size:25px;
        padding:20px;
        color:white;
        border:0px solid white;
        margin:20px;
        visibility:hidden;

    }
    

    .searchField{
        padding:20px;
        font-size:25px;
        border: 2px solid #8fd6d6!important
        
    }
    .searchField:active{
        border:2px solid #8fd6d6;
    }
    .styledSelect{
        padding:20px;
        font-size:25px;
        border:2px solid #8fd6d6!important;
        background-color:white;
        margin-left:10px!important;
    }
    .styledSelect:hover{
        background-color: #8fd6d6;
        color:white;
    }
`;

export const FormArticleStyle = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #474747;
    border-radius: 2px;
    width: 600px;
    margin: 0 auto;
    height: 1000px;
    margin-top: 100px;

    &>*{
        border: 0px solid transparent;
        width: 500px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
    &>p:first-of-type{
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        font-size: x-large;
        border-radius: 0;
    }
    &>input{
        box-shadow: 0.5px 0.5px 2px black;
    }
    &>textarea{
        box-shadow: 0.5px 0.5px 2px black;
        min-width:200px;
        min-height:200px;
    }

    .submitButton{
        background-color:#469fb9;
        color:white;
    }
    .submitButton:hover{
        background-color:#75bcd8;
        font-size:20px;
    }
`;

export const PaginationBarStyle = styled.section`
        p{
            display:inline-flex;
            text-align:center;
            background-color:#469fb9;
            padding:20px;
            color:white;
        }
        p:hover{
            background-color:#75bcd8;
            cursor:pointer;
            
        }
        p:active{
            background-color:#75bcd8;
            color:white;
            border: 1px solid black;
        }
        padding:20px;
        text-align:center;
        


`;
export const Footer = styled.form`
    margin-top: 1rem;
    padding: 1rem;
    background-color:#f2f2f2;
    bottom: 0;
    left: 0;
    width: 100%;
    
    

    ul{
        text-align:center;
        padding-inline-start:0px;
    
    }
    
    li{
        display:inline-flex;
        text-align:center;
        list-style:none;
        padding:10px;
    }
`;

export const FormContactStyle = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #474747;
    border-radius: 2px;
    width: 600px;
    margin: 0 auto;
    height: 1000px;
    margin-top: 100px;

    &>*{
        border: 0px solid transparent;
        width: 500px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
    &>p:first-of-type{
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        font-size: x-large;
        border-radius: 0;
    }
    &>input{
        box-shadow: 0.5px 0.5px 2px black;
    }
    &>textarea{
        box-shadow: 0.5px 0.5px 2px black;
        min-width:200px;
        min-height:200px;
    }

    .submitButton{
        background-color:#469fb9;
        color:white;
    }
    .submitButton:hover{
        background-color:#75bcd8;
        font-size:20px;
    }
`;

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #474747;
    border-radius: 2px;
    width: 350px;
    margin: 0 auto;
    height: 650px;
    margin-top: 100px;

    &>*{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
    &>p:first-of-type{
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        font-size: x-large;
        border-radius: 0;
    }
    &>input{
        box-shadow: 0.5px 0.5px 2px black;
    }

    .submitButton{
        background-color:#469fb9;
        color:white;
    }
    .submitButton:hover{
        background-color:#75bcd8;
        font-size:20px;
    }
`;


export const FormButton = styled.button`
    margin-top: auto;
    margin-bottom: 40px;
    padding: 20px 20px 20px 20px;
    border-radius:0px;
    background-color:  #8fd6d6;
    font-size:20px;
    line-height:1px;
    border: 0px solid transparent;
    color: white;
    box-shadow: 0.5px 0.5px 2px black;

    :hover{
        background-color: #63e8ff;
        color: white;
        cursor: pointer;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    background-color: #white;
    opacity: 0.72;
    
    flex-wrap: wrap;
    box-shadow: 0px 2px 3px black;
    
    ul{
        display: flex;
        list-style: none;
        color: black;
        text-decoration: none;
        flex-direction: row-reverse;
        height: 50px;
        flex-grow: inherit;
        margin: 0;
        margin-left: auto;
    }

    

    li{
        margin: auto 20px;
    }

    p{
        float: left;
        color: #000;
        margin-left: 10px;
    }

    ul>li>a{
        text-decoration: none;
        color: #000;
        text-align: center;
    }
    ul>li>.active{
        border-bottom: 1px solid #469fb9;
        color:#469fb9;
    }

    ul>li>a:hover{
        cursor: pointer;
        border-bottom: 1px solid #469fb9;
        color: #469fb9;
    }
    @media all and (max-width: 700px){
        flex-direction: column;
        li{
            margin-left: 7px;
            margin-right: 7px;
        }
        ul{
            margin: 0 auto;
            padding: 0;
        }
        p{
            margin: 0 auto;
        }
    }

    .loginbutton{
        background-color: #469fb9;
        color: white;
        width: 100px;
        text-align: center;
        line-height: 50px;
        margin: 0px;
        padding: 0px;
    }
    .loginbutton:hover{
        cursor: pointer;
        background-color:#75bcd8;
    }
    .loggOut{
        background-color: #469fb9;
        color: white;
        width: 100px;
        text-align: center;
        line-height: 50px;
        margin: 0px;
        padding: 0px;
    }
    }
    .loggOut:hover{
        cursor: pointer;
        background-color:#75bcd8;
    }

`;

export const CreatePollForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-right: 300px;
    margin-left: 300px;

    &>div{
        width: 350px;
        margin: 0 auto;
        height: 650px;
        background-color: #3d3d3d;
        color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 5px 5px grey;
    }
    &>button{
        margin: 0 auto;
    }
    margin-top: 100px;

    @media all and (max-width: 1660px){
        margin-right: 100px;
        margin-left: 100px;
    }
    @media all and (max-width: 1270px){
        margin-right: 0;
        margin-left: 0;
    }

    @media all and (max-width: 1070px){
        margin-top: 30px;
        &>div{
            margin-bottom: 20px;
        }
    }
    @media all and (max-width: 900px){
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        &>div:nth-child(1) {order: 1;}
        &>div:nth-child(2) {order: 0;}
        &>section:nth-child(3) {order: 2;}
        
        &>div{
            margin-bottom: 30px;
        }
    }
    section{
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 0 auto;
        height: 200px;
        background-color: #3d3d3d;
        color: white;
        border-radius: 10px;
        box-shadow: 5px 5px 5px grey;
    }
    section>*{
        margin: 0 auto;
        margin-top: 20px;
    }
    section>input{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0.5px 0.5px 2px black;
    }
`;

export const QuestionListDiv = styled.div`
    overflow-y:auto;

    &>*{
        text-align: center;
        margin: 0 auto;
        margin-top: 10px;
    }
    &>*:first-child{
        border-bottom: 1px solid white;
        width: 300px;
    }
    &>ul{
        list-style: none;
        padding: 0;
        margin-top: 0;
    }
    
    &>ul>li{
        margin-top: 30px;
        margin-bottom: 20px;
        width: 170px;
    }
    &>ul>li>ul{
        list-style: none;
        padding: 0;
        font-size: small;
    }

    &>ul>li>ul:first-child{
        border-top: 1px solid white;
    }
`;

export const CreateQuestionDiv = styled.div`
    &>*{
        text-align: center;
        margin: 0 auto;
        margin-top: 10px;

    }
    &>input{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0.5px 0.5px 2px black;
    }
    &>*>ul{
        list-style: none;
        padding: 0;
    }

    &>div{
        background-color: white;
        color: black;
        width: 280px;
        border-radius: 5px;
        height: 320px;
        margin-bottom: 5px;
        box-shadow: 0.5px 0.5px 2px black;
    
    }
    &>div>p{
        margin: 0 auto;
        border-bottom: 1px solid black;
        width: 200px;
        margin-top: 10px;
    }
`;

export const FinishPollButton = styled.button`
    margin-top: 20px;
    border-radius: 5px;
    background-color: #419639;
    height: 35px;
    border: 0px solid transparent;
    color: white;
    width: 170px;
    height: 40px;
    margin: 0 auto;
    box-shadow: 0.5px 0.5px 2px black;

    &:hover{
        background-color: grey;
        cursor: pointer;
    }
`;

export const ButtonBlue = styled.button`
    border-radius: 5px;
    background-color: #0082C8;
    height: 25px;
    border: 0px solid transparent;
    color: white;
    width: 100px;
    height: 30px;
    margin-top: auto;
    margin-bottom: 40px;
    box-shadow: 0.5px 0.5px 2px black;
    &:hover{
        cursor: pointer;
        background-color: grey;
    }
`;

export const ViewOfficesDiv = styled.div`

    h2 { 
        font-size:3em;
        font-weight:bold;  
        margin-left:25px;  
    }


    
    ul{
        padding:10px;
    }
    .title{
        font-weight:bold;
        font-size:16px;
    }

    .buttons-container{
        float:right;
        padding:20px;
    }

    .button-change{
        padding:15px;
        margin:5px;
        border:2px solid white;
        font-size:20px;
        background-color:white;
        color:black;
    }

    .button-change-active{
        background-color:white;
        color:#63e8ff;
    }
    .main-banner{
        width:100%;
        height:400px;
        text-align: center;
        vertical-align: middle;
        line-height: 400px;
        background-color:#dbdbdb;
        font-size:50px;   
    }
    .list-element-view-container{
        display:inline-flex;
        border: 2px solid black;
        padding:1em;
        margin:2em;
        

    }
    .list-element-view-grid{
        display:inline-flex;
        border: 2px solid black;
        padding:1em;
        margin:2em;

    }
    .list-element-view-grid li{
        list-style:none;
        padding:5px;
 
     }
    .list-element-view-list{
        display:block;
        margin:1em;

    }
    .list-element-view-list li{
       display:inline;
       list-style-type:square;
       padding:5px;

    }
    .FilterBox{
        font-size:20px;
        float:right;
        padding:20px;
        background-color:#dbdbdb
        
    }
    @media all and (max-width: 500px){
        font-size:1em;
        padding:40px;
    }
    @media all and (max-width: 800px){
        font-size:1em;
    }



    
`;

export const OfficeDetailView = styled.article`
        ul{
            list-style:none;
        }
        .wrapper{
            display:inline-flex;
            flex-direction:row;
        }
        .bottom-banner{
            width:100%;
            height:300px;
            line-height:300px;
            vertical-align:middle;
        }
        .imagebox{
            display:block;
            text-align:center;
            background-color:#dbdbdb;
            width:100px;
            height:100px;
            margin:20px;
        }

        p{
            padding:10px;
        }
`;

export const UndetailedPollSectionWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const UndetailedPollSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    border-radius: 10px;
    width: 350px;
    margin: 0 auto;
    height: 400px;
    margin-top: 50px;
    background-color: #3d3d3d;
    box-shadow: 5px 5px 5px grey;

    &>ul{
        overflow-y:auto;
        list-style: none;
        padding: 0;
    }
    
    &>ul>div>ul{
        list-style: none;
        padding: 0;
    }
`;




