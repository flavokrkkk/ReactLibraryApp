import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryList from './LibraryList';
import './LibraryCatalog.scss'
import { fetchMovies} from '../../store/asyncActions/asyncData';
import { Button, Input, Space } from 'antd';
import { setCurrentPage } from '../../store/bookReducer';

const LibraryCatalog = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    //Пагинация при скролле

    const books = useSelector(state => state.books.books).sort()

    const currentPage = useSelector(state => state.books.currentPage)

    const totalPage = useSelector(state => state.books.totalPage)

    const pages = [1, 2, 3, 4, 5]

    const pageCount = Math.ceil(totalPage)

    //Поиск книг c помощью useMemo
    const searchAndSortedBook = useMemo(() => {
        return books.sort().filter(book => book.title.includes(value))
    }, [value, books])

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [currentPage])


    return (
        <div className='Library__Catalog-Container'>  
            <div className='Library__Catalog-Wrapper'>
                <h1 className='Library__Catalog-Title'>
                    Каталог
                </h1>
                <div className='Library__Catalog-Input'>
                <Space.Compact style={{ width: '70%'}}>
                    <Input value={value} onChange={(e) => setValue(e.target.value)} style={{height: 40}} defaultValue='Поиск...' />
                    <Button style={{height: 40}} type="default">Submit</Button>
                </Space.Compact>
                </div>
                <hr/>
            {searchAndSortedBook.length > 0
             ?
             <div className='Library__Catalog-List'>
                {searchAndSortedBook.map(book => 
                        <>
                            <LibraryList
                                book={book}
                            />
                        </>
                    )}
             </div>
             :
             <div className='Library__Catalog-List-Zero'>
                <h1>К сожалению каталог пуст!</h1>
             </div>
            }
            </div>
            <div className='pages'>
                    {pages.map(page => 
                            <span
                            className={currentPage == page ? 
                            'current__page': 'page'} 
                            key={page.id}
                            onClick={() => dispatch(setCurrentPage(page))}
                            >
                            {page}
                            </span>
                        )}
            </div>
        </div>
    );
};

export default LibraryCatalog;