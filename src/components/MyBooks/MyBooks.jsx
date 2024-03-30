import { useDispatch, useSelector } from "react-redux";
import './MyBooks.scss'
import { useNavigate } from "react-router-dom";
import { EDIT_STATUS } from "../../store/statusReducer";

const MyBooks = () => {

    const myBook = useSelector(state => state.myBook.myBook)
    const status = useSelector(state => state.status.status)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isReaded = () => {
        dispatch({type: EDIT_STATUS, payload: !status.readed})
    }



    return (
        <div className="MyBooks__Container">
            <h1 className="MyBooks__Title">MyBooks</h1>
            <hr/>
            {myBook.map(book =>
                <>
                    <div className="MyBook__List" >
                        <div onClick={() => navigate(`/info/${book.id}`)}  className="MyBook__List-Wrapper">
                            <h2>{book.id}. {book.title}</h2>
                            <hr/>
                            <h2>Описание:</h2>
                            <div className="MyBook__List-Descr">
                                <text>{book.body}</text>
                            </div>
                        </div>
                        <div className="MyBook__List-Button">
                            { status.readed === true ?  <button style={{background:"#8282db"}} onClick={isReaded}>Прочитана</button> : <button onClick={isReaded}  >Не Прочитана</button>}
                        </div>
                    </div>
                </> 
                )}
        </div>
    );
};

export default MyBooks;