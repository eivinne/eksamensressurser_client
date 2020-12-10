import React, {useState} from 'react'
import {PaginationBarStyle} from '../styles/StyledComponents'

const PaginationBar = ({ articles }) => {

    const fields = [];
    
    for (let i = 1; i <= articles.pages; i++) {
        fields.push(<p key={i}>{i}</p>);
    }

    return (
        <>
        <PaginationBarStyle>
        <span>
            {fields}
        </span>
        </PaginationBarStyle>
        </>
    )
};

export default PaginationBar;