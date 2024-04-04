import { useDispatch, useSelector } from "react-redux";
import './MyBooks.scss'
import { EDIT_STATUS } from "../../store/statusReducer";
import { REMOVE_MYBOOKS } from "../../store/myBooksReducer";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import { useEffect } from "react";

const MyBooks = () => {

    const myBook = useSelector(state => state.myBook.myBook)
    const status = useSelector(state => state.status.status)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isReaded = (book) => {
        dispatch({type: EDIT_STATUS, payload: book})
    }

    const removeBook = (id) => {
        setTimeout(() => {
            dispatch({type: REMOVE_MYBOOKS, payload: id})
        }, 500)
        console.log('remove')
    }

    return (
        <div className="MyBooks__Container">
            <h1 className="MyBooks__Title">MyBooks</h1>
            <div className="MyBooks__Button-Static">
                <Button onClick={() => navigate(STATIC)} style={{width: '80%'}}>Статистика</Button>
            </div>
            <hr/>
            {
                myBook.length === 0 
                ?
                <h1 className="MyBooks__SubTitle">MyBooks пуст!</h1>
                :
                 myBook.map((book, index) =>
                    <div key={index}>
                        <div className="MyBook__List" >
                            <div className="MyBook__List-Wrapper">
                                <h2>{book.id}. {book.title}</h2>
                                <hr/>
                                <h2>Описание:</h2>
                                <div className="MyBook__List-Descr">
                                    <h3>{book.body}</h3>
                                </div>
                            </div>
                            <div className="MyBook__List-Button">
                                { status.readed.id === book.id 
                                    ?  
                                    <button style={{background:"#8282db"}} onClick={() => {
                                    isReaded(book)
                                    }}>
                                        Прочитана
                                    </button>
                                    : 
                                    <button onClick={() => {
                                        isReaded(book)
                                        removeBook(book.id)
                                    }} >
                                        Не Прочитана
                                    </button>
                                    }
                            </div>
                        </div>
                    </div> 
                )
            }
        </div>
    );
};

export default MyBooks;