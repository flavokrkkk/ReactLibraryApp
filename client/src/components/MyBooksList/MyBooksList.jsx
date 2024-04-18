import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "./MyBooksList.scss";

const MyBooksList = ({ myBook, status, isReaded, removeBook }) => {
  return (
    <div>
      {myBook.length === 0 ? (
        <h1 className="myBooks__sub-title">MyBooks пуст!</h1>
      ) : (
        myBook.map((book) => (
          <div key={book.id}>
            <div className="myBook__list">
              <div>
                <h2>
                  {book.id}. {book.title}
                </h2>
                <hr />
                <h2>Описание:</h2>
                <div className="myBook__list-description">
                  <h3>{book.body}</h3>
                </div>
              </div>

              <ButtonGroup
                status={status}
                isReaded={isReaded}
                removeBook={removeBook}
                book={book}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBooksList;
