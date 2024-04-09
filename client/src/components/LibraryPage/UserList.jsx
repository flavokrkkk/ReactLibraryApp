import { useEffect } from "react";
import { ADD_USERONE, REMOVE_USER } from "../../store/userReducer";
import { ADD_USERTWO, REMOVE_USER_TWO } from "../../store/userTwoReducer";
import { useDispatch, useSelector } from "react-redux";
import { SET_DOSTUP_BOOK } from "../../store/bookOneReducer";
import { EDIT_STATUS_ONHANDS } from "../../store/statusReducer";
import { Button } from "antd";
import LibraryPageList from "./LibraryPageList";
import LibraryPageListTwo from "./LibraryPageListTwo";

const UserList = ({status, oneBook}) => {

    //Получаем списки userов из store
    const users = useSelector(state => state.users.users)
    const userTwo = useSelector(state => state.usersTwo.usersTwo)

    const dispatch = useDispatch()

    //Функция добавления usera в очередь за книгой
    const addUser = (userName) => {
        const customer = {
            id: Date.now(),
            name: userName
        }
        dispatch({type: ADD_USERONE, payload: customer})
    }

    //Функция удаления пользователя
    const onRead = (id) => {
        dispatch({type: REMOVE_USER, payload: id})
    }   

    //Функция добавления userов которые добавили в myBook
    const pushUserInMyBook = (users) => {
        dispatch({type: ADD_USERTWO, payload: users})
    }

    //Функция удаления пользователей из myBook
    const removeUserinMyBook = (user) => {
        dispatch({type: REMOVE_USER_TWO, payload: user})
        if(userTwo[0].id === 101) {
            dispatch({type: REMOVE_MYBOOKS, payload: oneBook.id})
        } 
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


    
    return (
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
    );
};

export default UserList;