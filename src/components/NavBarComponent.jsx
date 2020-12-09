import React, { Component, useState } from "react";
import { NavLink } from 'react-router-dom'
import { NavBar } from '../styles/StyledComponents';
import {loggoutButton} from '../styles/StyledComponents'
import { useCookies} from 'react-cookie';
    


const NavBarComponent = () => {

 
    
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const logOutEvent = async ()=> {
        removeCookie('token');
        removeCookie('role');
        window.location.reload();
    };

    if (!cookies.role) {
        return (
            <NavBar>
                <p>FG</p>
                <ul>
                    <li className="loginButton"><NavLink activeClassName="active"  to="/Login">Login</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                    <li><NavLink activeClassName="active" to="/SignUp">Sign up</NavLink></li>
                    <li><p>|</p></li></ul>
            </NavBar>
        )
    }
    if(cookies.role === "Admin"){
        return (
            <NavBar>
                <p className="logo">FG</p>
                <ul>
                    <li><p className="loggOut" onClick={logOutEvent}>Logg out</p></li>
                    <li className="adminButton"><NavLink activeClassName="active" to="/AdminPanel">Admin Panel</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
                </ul>
            </NavBar>
        )
    }
    
    else {
        return (
            
            <NavBar>
                <p>FG</p>
                <ul>
                    <li><p className="loggOut" onClick={logOutEvent}>Logg ut</p></li>
                    <li><NavLink activeClassName="active" to="/Home">Hjem</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Offices">Kontorer</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Articles">Fagartikler</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Contact">Kontakt</NavLink></li>
                    <li><p>|</p></li>
                </ul>
            </NavBar>
        )
    }
}

export default NavBarComponent;