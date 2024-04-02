import React from 'react';
import { useDispatch } from 'react-redux';
import './Pagination.scss'

const Pagination = ({currentPage, setCurrentPage}) => {
    const pages = [1, 2, 3, 4, 5]

    const dispatch = useDispatch()

    return (
    <div className='pages'>
        {pages.map((page, index) => 
                <span
                className={currentPage == page ? 
                'current__page': 'page'} 
                key={index}
                onClick={() => dispatch(setCurrentPage(page))}
                >
                {page}
                </span>
            )}
    </div>
    );
};

export default Pagination;