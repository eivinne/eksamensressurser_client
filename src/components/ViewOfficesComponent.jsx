/* TODO add functionality for how Offices are viewed */
import React from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'

const ViewOfficesComponent = ({ officesList }) => {
    const offices = [...officesList];
    return (
        
        <ViewOfficesDiv>
            <div>Offices</div>
            <ul>
                {offices.map((item) => {
                    const city = [...item.city];
                    return <ul key={city}><p>{item.city}</p>
                    <li key={item.id}>{item.number}  
                    </li></ul>
                })}
            </ul>
        </ViewOfficesDiv>
            

    )
}

export default ViewOfficesComponent