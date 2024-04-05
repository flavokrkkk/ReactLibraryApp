import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LibraryCatalog.scss'
import { fetchMovies} from '../../store/asyncActions/asyncData';
import { Button, Input, Space } from 'antd';
import LibaryCatalogList from './LibaryCatalogList';
import Pagination from '../Pagination/Pagination';
import { setCurrentPage } from '../../store/bookReducer';

const LibraryCatalog = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    //Получаем отсортированный список книг
    const books = useSelector(state => state.books.books).sort()
    const loading = useSelector(state => state.books.loading)
    //Пагинация при скролле
    const currentPage = useSelector(state => state.books.currentPage)

    // Реализация поиска книг c помощью useMemo
    const searchAndSortedBook = useMemo(() => {
        return books.sort().filter(book => book.title.toLowerCase().includes(value.toLowerCase()))
    }, [value, books])

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [currentPage])


    if(loading)  {
        return (
            <h1 
            className='Library__Catalog-Container Library__Catalog-Title'
            style={{marginTop: '350px'}}
            >
                Loading...
            </h1>
        )
    }

    return (
        <div className='Library__Catalog-Container'>  
            <div className='Library__Catalog-Wrapper'>
                <h1 className='Library__Catalog-Title'>
                    Каталог
                </h1>
                <div className='Library__Catalog-Input'>
                <Space.Compact style={{ width: '70%'}}>
                    <Input value={value} onChange={(e) => setValue(e.target.value)} style={{height: 40}} placeholder='Поиск книг...'/>
                    <Button style={{height: 40}} type="default">Submit</Button>
                </Space.Compact>
                </div>
                <hr/>
            <LibaryCatalogList
                searchAndSortedBook={searchAndSortedBook}
            />
            </div>
            <Pagination 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default LibraryCatalog;