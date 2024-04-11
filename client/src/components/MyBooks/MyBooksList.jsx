import MyBookButton from "../UI/Button/ButtonMyBook/MyBookButton.jsx";
import "./MyBooksList.scss";

const MyBooksList = ({ myBook, status, isReaded, removeBook }) => {
  return (
    <div>
      {myBook.length === 0 ? (
        <h1 className="MyBooks__SubTitle">MyBooks пуст!</h1>
      ) : (
        myBook.map((book, index) => (
          <div key={index}>
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
              <MyBookButton
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
