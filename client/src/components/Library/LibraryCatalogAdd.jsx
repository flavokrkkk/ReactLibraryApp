import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../../store/bookReducer";
// import { ADD_ONE_BOOK } from "../../store/bookOneReducer";

const LibraryCatalogAdd = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

    const addNewBook = () => {
        const books = {
            id: Date.now(),
            title: title,
            body: body
        }
        dispatch({type: ADD_BOOK, payload: books})
    }

    return (
        <div>
            <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Input value={body} onChange={(e) => setBody(e.target.value)}/>
            <Button onClick={addNewBook}>Добавить книгу</Button>
        </div>
    );
};

export default LibraryCatalogAdd;