import React from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficeIndividual from './ViewOfficeIndividual'
import offices from './../data/Offices.json';

const ViewOfficesComponent = () => {

    return (
        <ViewOfficesDiv>
            <section className="main-banner">Kontorer</section>
            <button>List View</button>
            <ul>
                <p>Fredrikstad ({offices.length} Kontorer)</p>
                {offices.map((office,index)=>{
                return <ViewOfficeIndividual key={index} office={office}/>
                })}
            </ul>
        </ViewOfficesDiv>
    )}

export default ViewOfficesComponent