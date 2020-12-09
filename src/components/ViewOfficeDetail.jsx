import React, { useState, useEffect } from 'react';
import { HomeHeader } from '../styles/StyledComponents';
import listOfOffices from '../data/offices.json';


const ViewOfficeDetail = ({office}) => {

    const [employees, setEmployees] = useState(listOfOffices.employees);

    console.log(office);
    return (
        <>
        <HomeHeader>{office.name}</HomeHeader>
        <h2>Velkommen til {office.name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3>Våre ansatte</h3>
        <ul>
            {employees.map((employee) => {
                return(
                    <li>
                        <div>Bilde</div>
                        <p>{employee.name}</p>
                        <p>{employee.stilling}</p>
                    </li>
                )
            })}
        </ul>
        <div>Bottom banner</div>
        </>
    )
};

/**/

export default ViewOfficeDetail;
