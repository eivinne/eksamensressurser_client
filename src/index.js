import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import {Footer} from './styles/StyledComponents'

ReactDOM.render(
  <Router>
    <Routes />
    <Footer><div><ul><li>Org nr: 077 077 077</li><li>lg@igor.no</li><li>99 99 99 99</li></ul></div></Footer>
  </Router>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
