import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";
import Title from "../Title/Title.jsx";
import { MyBookListCard, MyBookListDescription } from "./MyBooksList.js";

const MyBooksList = ({ myBook, status, isReaded, removeBook }) => {
  return (
    <div>
      {myBook.length === 0 ? (
        <Title>MyBooks пуст!</Title>
      ) : (
        myBook.map((book) => (
          <div key={book.id}>
            <MyBookListCard>
              <div>
                <h2>
                  {book.id}. {book.title}
                </h2>
                <hr />
                <h2>Описание:</h2>
                <MyBookListDescription>
                  <h3>{book.body}</h3>
                </MyBookListDescription>
              </div>

              <ButtonGroup
                status={status}
                isReaded={isReaded}
                removeBook={removeBook}
                book={book}
              />
            </MyBookListCard>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBooksList;
