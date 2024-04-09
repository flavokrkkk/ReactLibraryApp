import { useCallback } from "react";

const MyBookButton = ({status, isReaded, removeBook, book}) => {

    const cachingMyBook = useCallback(() => {
        isReaded(book)
        removeBook(book.id)
    }, [])

    const isReading = () => {
        isReaded(book)
    }

    return (
        <div className="MyBook__List-Button">
            { status.readed.id === book.id 
            ?  
            <button style={{background:"#8282db"}} 
            onClick={isReading}>
                Прочитана
            </button>
            : 
                <button onClick={cachingMyBook} >
                Не Прочитана
            </button>
            }
        </div>
    );
};

export default MyBookButton;