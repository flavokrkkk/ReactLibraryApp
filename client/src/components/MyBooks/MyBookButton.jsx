
const MyBookButton = ({status, isReaded, removeBook, book}) => {
    return (
        <div className="MyBook__List-Button">
            { status.readed.id === book.id 
            ?  
            <button style={{background:"#8282db"}} 
            onClick={() => {
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
    );
};

export default MyBookButton;