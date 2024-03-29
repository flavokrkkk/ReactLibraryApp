import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LibraryPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/asyncActions/asyncData';
import { REMOVE_USER } from '../../store/userReducer';

const LibraryPage = () => {

    //FakeData
    const book = {id: 1, author: 'Л.Н Толстой', title: 'Война и мир', descr: 'Книга от великого писателя, описывает захватывающюю историю', descrInfo: 'Роман «Война и мир» — произведение, равного которому нет во всей мировой литературе, оно описывает русское общество в эпоху войн против Наполеона в 1805-1812 годах', status: {available: false, readed: false, onHands: false}}

    //Целпяем id с поисковой строки
    const params = useParams()
    const [readed, setReaded] = useState(book.status.readed)

    //Получаем массив с юзерами
    const users = useSelector(state => state.users.users)

    //Получаем массив с книгами
    const books = useSelector(state => state.books.books)
    const oneBook = useSelector(state => state.oneBook.oneBook)

    const dispatch = useDispatch()

    const fetchBookById = (id) => {
        return books.filter(book => book.id === id)
     }

    //Функция удаления пользователя
    const onRead = (id) => {
        dispatch({type: REMOVE_USER, payload: id})
    }

    const isReaded = () => {
        setReaded(!readed)
    }

    
    useEffect(() => {
        dispatch(fetchUsers(10))
       console.log(fetchBookById(params.id))
    }, [])

    return (
        <div className='Library__Page-Container'>
            <div className='Library__Page-Title'>
                <h1>{book.title}</h1>
            </div>
           <hr/>
           <div className='Library__Page-Descr'>
                {book.descr}
           </div>
           <div className='Library__Page-Descr-Bold'>
                {book.descrInfo}
           </div>
           <div className='Library__Page-Button-Group'>
               { book.status.available === true ? <button>Доступна</button> : <button disabled>Не доступна</button>}
               { book.status.onHands === false ? <button>На руках</button> : <button style={{background:"#8282db"}} disabled>На руках</button>}
               { readed === true ? <button onClick={isReaded}>Прочитана</button> : <button onClick={isReaded} style={{background:"#8282db"}} >Прочитана</button>}
           </div>
           <button className='Library__Page-Button'>Добавить в MyBooks</button>
           <div className='Libray__Page-Users'>
                <hr/>
                <h1>Пользователи с книгой</h1>
                {users.map(user => 
                        <div className='Libray__Page-User'>
                           {user.id}. {user.name}
                           <p>{user.email}</p>
                           <button onClick={() => onRead(user.id)} className='Libray__Page-User-Button'>Прочитал</button>
                        </div>
                    )}
           </div>
        </div>
    );
};

export default LibraryPage;