import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryList from './LibraryList';
import './LibraryCatalog.scss'


const LibraryCatalog = () => {

    const dispatch = useDispatch()

//Получаем массива с книгами
    const books = useSelector(state => state.books.books)
    console.log(books)

    return (
        <div className='Library__Catalog-Container'>  
            <div className='Library__Catalog-Wrapper'>
                <h1 className='Library__Catalog-Title'>
                    Каталог
                </h1>
            {books.length > 0
             ?
             <div className='Library__Catalog-List'>
                {books.map(book => 
                        <>
                            <LibraryList
                                book={book}
                            />
                        </>
                    )}
             </div>
             :
             <h1>Книги закончились!</h1>

            }
            </div>
        </div>
    );
};

export default LibraryCatalog;