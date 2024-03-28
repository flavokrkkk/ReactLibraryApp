import React from 'react';

const LibraryList = ({book}) => {
    return (
        <div className='Library__Catalog-Item'>
            <div className='Library__Catalog-Item-Title'>
               {book.id}. {book.title}
            </div>
            <div className='Library__Catalog-Item-Descr'>
                {book.descr}
            </div>
            <div className='Library__Catalog-Item-Author'>
                {book.author}
            </div>
        </div>
    );
};

export default LibraryList;