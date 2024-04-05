import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LibraryPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getOneBook } from '../../store/asyncActions/asyncData';
import { ADD_MYBOOKS} from '../../store/myBooksReducer';
import { ADD_USERTWO } from '../../store/userTwoReducer';
import ButtonAdd from './ButtonAdd';
import UserList from './UserList';

const LibraryPage = () => {

    //Целпяем id с поисковой строки
    const params = useParams()

    //Состояние для disabled кнопки
    const [inMyBooks, setInMyBooks] = useState(false)

    //Получаем данные из store
    const dispatch = useDispatch()

    const status = useSelector(state => state.status.status)
    const oneBook = useSelector(state => state.oneBook.oneBook)
    const myBook = useSelector(state => state.myBook.myBook)


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
            <UserList
            status={status}
            oneBook={oneBook}
            />
        </div>
    );
};

export default LibraryPage;