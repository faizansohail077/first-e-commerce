import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, onClick }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.floor(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination' style={{ display: 'flex', justifyContent: 'space-around' }}>
                {pageNumbers.map(number => {
                    console.log('this is number', number)
                    return (
                        <li key={number} className='page-item'>
                            <Link onClick={() => onClick(number)} className='page-link'>
                                {number}
                            </Link>
                        </li>)
                })}
            </ul>
        </nav>
    );
};

export default Pagination;