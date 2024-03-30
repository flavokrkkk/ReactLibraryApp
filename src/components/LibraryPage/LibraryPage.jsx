import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LibraryPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import {fetchOneBook, fetchUsers } from '../../store/asyncActions/asyncData';
import { REMOVE_USER } from '../../store/userReducer';
import { EDIT_STATUS } from '../../store/statusReducer';
import { ADD_MYBOOKS } from '../../store/myBooksReducer';

const LibraryPage = () => {

    //Целпяем id с поисковой строки
    const params = useParams()
    
    //Получаем массив с юзерами
    const [books, setBooks] = useState({})
    const [disabled, setDisabled] = useState(false)

    const users = useSelector(state => state.users.users)
    const status = useSelector(state => state.status.status)
    // const myBook = useSelector(state => state.myBook.myBook)

    const dispatch = useDispatch()

    //Функция удаления пользователя
    const onRead = (id) => {
        dispatch({type: REMOVE_USER, payload: id})
    }

    //Логика по disabled кнопки


    const isReaded = () => {
        dispatch({type: EDIT_STATUS, payload: !status.readed})
    }

    const addMyBook = () => {
        alert('Книга  добавлена в My Book')
        dispatch({type: ADD_MYBOOKS, payload: books})
        setDisabled(true)
    }

    useEffect(() => {
        dispatch(fetchUsers(10))
        fetchOneBook(params.id).then(data => setBooks(data))
        setDisabled()
    }, [])

    return (
        <div className='Library__Page-Container'>
            <div className='Library__Page-Title'>
                <h1>{books.title}</h1>
            </div>
           <hr/>
           <div className='Library__Page-Descr'>
                {books.body}
           </div>
           <div className='Library__Page-Descr-Bold'>
                {books.body}
           </div>
           <div className='Library__Page-Button-Group'>
               { status.available === true ? <button>Доступна</button> : <button disabled>Не доступна</button>}
               { status.onHands === false ? <button>На руках</button> : <button style={{background:"#8282db"}} disabled>На руках</button>}
               { status.readed === true ?  <button style={{background:"#8282db"}} onClick={isReaded}>Прочитана</button> : <button onClick={isReaded}  >Не Прочитана</button>}
           </div>
           {
            disabled 
            ?
            <button className='Library__Page-Button' disabled onClick={addMyBook}>Добавить в MyBooks</button>
            :
            <button className='Library__Page-Button' onClick={addMyBook}>Добавить в MyBooks</button>
           }
           <div className='Libray__Page-Users'>
                <hr/>
                <h1>Пользователи с книгой</h1>
                {users.map(user => 
                    <>
                        <div className='Libray__Page-User'>
                           {user.id}. {user.name}
                           <p>{user.email}</p>
                           <button onClick={() => onRead(user.id)} className='Libray__Page-User-Button'>Прочитал</button>
                        </div>
                    </>
                    )}
           </div>
        </div>
    );
};

export default LibraryPage;