import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LibraryPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getOneBook } from '../../store/asyncActions/asyncData';
import { ADD_USERONE, REMOVE_USER } from '../../store/userReducer';
import { ADD_MYBOOKS } from '../../store/myBooksReducer';
import LibraryPageList from './LibraryPageList';
import { ADD_USERTWO, REMOVE_USER_TWO } from '../../store/userTwoReducer';
import LibraryPageListTwo from './LibraryPageListTwo';
import { Button } from 'antd';

const LibraryPage = () => {

    //Целпяем id с поисковой строки
    const params = useParams()
    
    //Получаем данные из store
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()

    const users = useSelector(state => state.users.users)
    const status = useSelector(state => state.status.status)
    const userTwo = useSelector(state => state.usersTwo.usersTwo)
    const oneBook = useSelector(state => state.oneBook.oneBook)

    //Функция добавления userов которые добавили в myBook
    const pushUserInMyBook = (users) => {
        dispatch({type: ADD_USERTWO, payload: users})
    }
    //Функция удаления пользователей из myBook
    const removeUserinMyBook = (users) => {
        dispatch({type: REMOVE_USER_TWO, payload: users})
    }

    //Функция удаления пользователя
    const onRead = (id) => {
        dispatch({type: REMOVE_USER, payload: id})
    }

    //Логика по disabled кнопки

    const addMyBook = () => {
        alert('Книга  добавлена в My Book')
        dispatch({type: ADD_MYBOOKS, readed: false, payload: oneBook})
        dispatch({type: ADD_USERTWO, payload: {id: 1111, name: 'Egor Yarovitsyn', email: 'egoryarovitsyn1@gmail.com'}})
        setDisabled(true)
    }

    const addUser = (userName) => {
        const customer = {
            id: Date.now(),
            name: userName
        }
        dispatch({type: ADD_USERONE, payload: customer})
    }

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(getOneBook(params.id))
        setDisabled()
    }, [])

    return (
        <div className='Library__Page-Container'>
            <div className='Library__Page-Main-Title'>
                <h1>Информация о книге</h1>
            </div>

            { oneBook.lengh !== 0 
            ?
           <div> 
                <div className='Library__Page-Title'>
                    <h2>{oneBook.title}</h2>
                </div>
            <hr/>
                <div className='Library__Page-Descr'>
                    {oneBook.body}
                </div>

                <div className='Library__Page-Descr-Bold'>
                        {oneBook.body}
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
           </div>
           :
           <h2>Информация о книге отсутсвует</h2>
            }
           
           <div className='Libray__Page-Users'>
                <hr/>
                <h2>Вы можете отслеживать очереди пользователей и читать любимые книжки!</h2>
                <div className='Library__Page-AddUser'>
                    <Button onClick={() => addUser(prompt())}>Записаться в очередь</Button>
                </div>

                <div className='Library__Page-Static'>
                    <div>
                        <h2>В избранном: </h2>
                        <LibraryPageList
                        users={users}
                        onRead={onRead}
                        pushUserInMyBook={pushUserInMyBook}
                        />
                    </div>
                    
                    <div>
                        <h2>В MyBooks: </h2>
                        <LibraryPageListTwo
                        userTwo={userTwo}
                        removeUserinMyBook={removeUserinMyBook}
                        />
                    </div>
                </div>
               
           </div>
        </div>
    );
};

export default LibraryPage;