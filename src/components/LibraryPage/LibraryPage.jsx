import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LibraryPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import {fetchOneBook, fetchUsers } from '../../store/asyncActions/asyncData';
import { ADD_USER, REMOVE_USER } from '../../store/userReducer';
import { ADD_MYBOOKS } from '../../store/myBooksReducer';
import { Button } from 'antd';

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

    const addMyBook = () => {
        alert('Книга  добавлена в My Book')
        dispatch({type: ADD_MYBOOKS, readed: false, payload: books})
        setDisabled(true)
    }

    const addUser = (userName) => {
        const customer = {
            id: Date.now(),
            name: userName
        }

        dispatch({type: ADD_USER, payload: customer})
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
                <h1>Пользователи которые хотят прочитать: </h1>
                <div className='Library__Page-AddUser'>
                    <Button onClick={() => addUser(prompt())}>Записаться в очередь</Button>
                </div>
                {users.map((user, index) => 
                    <>
                        <div className='Libray__Page-User'>
                           {index + 1}. {user.name}
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