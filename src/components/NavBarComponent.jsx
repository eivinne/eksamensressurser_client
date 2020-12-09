import React, { Component, useState } from "react";
import { NavLink } from 'react-router-dom'
import { NavBar } from '../styles/StyledComponents';
import {loggoutButton} from '../styles/StyledComponents'
import {logout} from '../utils/eventService'
import { Cookies, useCookies,withCookies } from 'react-cookie';



const NavBarComponent = () => {

 
    
    const [cookieRole] = useCookies(['Role']);

    const logOutEvent = async ()=> await logout();

    if (!cookieRole) {
        return (
            <NavBar>
                <p>FG</p>
                <ul>
                    <li><NavLink activeClassName="active" to="/Login">Login</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                    <li><NavLink activeClassName="active" to="/SignUp">Sign up</NavLink></li>
                    <li><p>|</p></li></ul>
            </NavBar>
        )
    }
    if(cookieRole === "Admin"){
        return (
            <NavBar>
                <p>FG</p>
                <ul>
                    <li><p className="loggOut" onClick={logOutEvent}>Logg out</p></li>
                    <li><p>{localStorage.getItem('user')}</p></li>
                    <li><p>|</p></li>
                    <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                    <li><NavLink activeClassName="active" to="/CreateArticle">Create Article</NavLink></li>
                </ul>
            </NavBar>
        )
    }
    
    else {
        return (
            <NavBar>
                <p>FG</p>
                <ul>
                    <li><p className="loggOut" onChange={logOutEvent}>Logg out</p></li>
                    <li><p>{localStorage.getItem('user')}</p></li>
                    <li><p>|</p></li>
                    <li><NavLink activeClassName="active" to="/CreateArticle">Create Article</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Home">Home</NavLink></li>
                </ul>
            </NavBar>
        )
    }
}

export default NavBarComponent;