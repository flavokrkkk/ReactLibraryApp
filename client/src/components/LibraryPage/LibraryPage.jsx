import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LibraryPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getOneBook } from '../../store/asyncActions/asyncData';
import { ADD_USERONE, REMOVE_USER } from '../../store/userReducer';
import { ADD_MYBOOKS, REMOVE_MYBOOKS} from '../../store/myBooksReducer';
import LibraryPageList from './LibraryPageList';
import { ADD_USERTWO, REMOVE_USER_TWO } from '../../store/userTwoReducer';
import LibraryPageListTwo from './LibraryPageListTwo';
import { Button } from 'antd';
import { SET_DOSTUP_BOOK } from '../../store/bookOneReducer';
import { EDIT_STATUS_ONHANDS } from '../../store/statusReducer';
import ButtonAdd from './ButtonAdd';

const LibraryPage = () => {

    //Целпяем id с поисковой строки
    const params = useParams()

    const [inMyBooks, setInMyBooks] = useState(false)

    //Получаем данные из store
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.users)
    const status = useSelector(state => state.status.status)
    const userTwo = useSelector(state => state.usersTwo.usersTwo)
    const oneBook = useSelector(state => state.oneBook.oneBook)
    const myBook = useSelector(state => state.myBook.myBook)

    //Функция добавления userов которые добавили в myBook
    const pushUserInMyBook = (users) => {
        dispatch({type: ADD_USERTWO, payload: users})
    }
   
    //Функция удаления пользователя
    const onRead = (id) => {
        dispatch({type: REMOVE_USER, payload: id})
    }

    //Логика по disabled кнопки

    const myBooksId = (id) => {
        let bool = false
        myBook.forEach(el => {
            if(el.id === id) {
                bool = true
            }
        })
        return bool
    }
    
    //Функция добавления книги в myBook
   const addMyBook = () => {
        if(inMyBooks){
            alert('Книга уже добавлена!')
        } 
        dispatch({type: ADD_MYBOOKS, readed: false, payload: oneBook})
        dispatch({type: ADD_USERTWO, payload: {id: 101, name: 'Egor Yarovitsyn', email: 'egoryarovitsyn1@gmail.com'}})
        setInMyBooks(true)
    }

     //Функция удаления пользователей из myBook
     const removeUserinMyBook = (user) => {
        dispatch({type: REMOVE_USER_TWO, payload: user})
        if(userTwo[0].id === 101) {
            dispatch({type: REMOVE_MYBOOKS, payload: oneBook.id})
        } 
    }

    const addUser = (userName) => {
        const customer = {
            id: Date.now(),
            name: userName
        }
        dispatch({type: ADD_USERONE, payload: customer})
    }


    useEffect(() => {
        if (oneBook.dostup !== userTwo.length < 3) {
            dispatch({type: SET_DOSTUP_BOOK, payload: userTwo.length < 3})
        } 
        
    }, [userTwo.length, pushUserInMyBook, removeUserinMyBook])

    useEffect(() => {
        if(status.onHands === userTwo.length < 1) {
            dispatch({type: EDIT_STATUS_ONHANDS, payload: !status.onHands})
        }
    }, [userTwo.length, pushUserInMyBook, removeUserinMyBook])



    useEffect(() => {
        dispatch(fetchUsers(10))
        dispatch(getOneBook(params.id))
    }, [])

    useEffect(() => {
        setInMyBooks()
    }, [inMyBooks])

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
                    { oneBook.dostup === true ? <button>Доступна</button> : <button style={{background:"#8282db"}} disabled>Не доступна</button>}
                    { status.onHands === true ? <button style={{background:"#8282db"}} disabled>На руках</button>: <button>На руках</button> }
                </div>
                <ButtonAdd
                oneBook={oneBook}
                addMyBook={addMyBook}
                myBooksId={myBooksId}
                />
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
                        oneBook={oneBook}
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