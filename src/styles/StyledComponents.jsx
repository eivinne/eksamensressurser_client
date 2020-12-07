import styled from 'styled-components';

export const HomeHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbdbdb;
    width: 100%;
    height: 300px;
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

    }

    .gridBox2 {
        grid-area: rightsection;
        height: 300px;
    }

    .gridBox3 {
        grid-area: lowersection;
        height: 300px;
        margin-top: 3em;
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
    height: 500px;
    margin-top: 100px;
    background-color: #f2f2f2;
    box-shadow: 5px 5px 5px grey;

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

    .loggOut:hover{
        cursor: pointer;
        border-bottom: 1px solid white;
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

    p { 
        font-size:3em;
        font-weight:bold;    
    }

    li{
        list-style:none;
        line-height:1.5em;
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
        border-radius:5px;
        border: 2px solid black;
        padding:1em;
        margin:2em;
        

    }
    .list-element-view-grid{
        display:inline-flex;
        border-radius:5px;
        border: 2px solid black;
        padding:1em;
        margin:2em;

    }
    .list-element-view-list{
        display:block;
        border-radius:5px;
        border: 2px solid black;
        padding:1em;
        margin:2em;

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




