import React, {useState} from 'react'
import {PaginationBarStyle} from '../styles/StyledComponents'

const PaginationBar = ({ articles, setPage, reload }) => {

    const fields = [];
    
    const handlePageSelect = (number) => {
        setPage(number);
        console.log(number);
        reload(number);
    }

    for (let i = 1; i <= articles.pages; i++) {
        fields.push(<p key={i} onClick={() => handlePageSelect(i)}>{i}</p>);
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