import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "./MyBooksList.scss";

const MyBooksList = ({ myBook, status, isReaded, removeBook }) => {
  return (
    <div>
      {myBook.length === 0 ? (
        <h1 className="MyBooks__SubTitle">MyBooks пуст!</h1>
      ) : (
        myBook.map((book) => (
          <div key={book.id}>
            <div className="MyBook__List">
              <div className="MyBook__List-Wrapper">
                <h2>
                  {book.id}. {book.title}
                </h2>
                <hr />
                <h2>Описание:</h2>
                <div className="MyBook__List-Descr">
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
