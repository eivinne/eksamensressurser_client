import React, { useState} from 'react';

const ArticleComponent = ({ article }) => {

    return (
        <>
            <article>
                <div></div>
                <h2>{article.tittel}</h2>
                <p>{article.kategori}</p>
                <p>{article.ingress}</p>
            </article>
        </>
    )
};