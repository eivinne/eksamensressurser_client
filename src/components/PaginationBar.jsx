import React, {useState} from 'react'

const PaginationBar = ({ articles }) => {

    const fields = [];
    
    for (let i = 1; i <= articles.pages; i++) {
        fields.push(<p key={i}>{i}</p>);
    }

    return (
        <span>
            test{fields}
        </span>
    )
};

export default PaginationBar;