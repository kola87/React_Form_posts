import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div key={liked} className="app-header d-flex">
            <h1>Nikolay G.</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}
export default AppHeader;