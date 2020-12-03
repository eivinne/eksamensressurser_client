/* TODO add functionality for how Offices are viewed */
import { render } from '@testing-library/react';
import React from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'

const ViewOfficesComponent = () => {

    

    return (
        
        <ViewOfficesDiv>
            <section className="main-banner">Kontorer</section>
            <button>List View</button>
            <ul>
                <p>Fredrikstad (8 Kontorer)</p>
                    <div className="list-element-view-container">
                        <ul>
                            <li>Rørlegger: $Nummer </li>
                            <li>Rørlegger veien $nummer</li>
                            <li> Tlf: 98842566 </li>
                            <li> $Lokasjon $nummer@epost.no</li>
                        </ul>
                    </div> 
                    <div className="list-element-view-container">
                        <ul>
                            <li>Rørlegger: $Nummer </li>
                            <li>Rørlegger veien $nummer</li>
                            <li> Tlf: 98842566 </li>
                            <li> $Lokasjon $nummer@epost.no</li>
                        </ul>
                    </div> 
                    <div className="list-element-view-container">
                        <ul>
                            <li>Rørlegger: $Nummer </li>
                            <li>Rørlegger veien $nummer</li>
                            <li> Tlf: 98842566 </li>
                            <li> $Lokasjon $nummer@epost.no</li>
                        </ul>
                    </div> 
                    <div className="list-element-view-container">
                    <ul>
                        <li>Rørlegger: $Nummer </li>
                        <li>Rørlegger veien $nummer</li>
                        <li> Tlf: 98842566 </li>
                        <li> $Lokasjon $nummer@epost.no</li>
                    </ul>
                </div>
                    
            </ul>
         
        </ViewOfficesDiv>
    );}
    


export default ViewOfficesComponent