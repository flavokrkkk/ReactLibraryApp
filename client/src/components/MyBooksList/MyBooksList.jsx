import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";
import { MyBookListCard, MyBookListDescription } from "./styles.js";
import Title from "../UI/Title/Title.jsx";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";
import Hr from "../UI/Hr/Hr.jsx";
const MyBooksList = ({
  myBook,
  status,
  changeStatusBook,
  changeRemoveBook,
}) => {
  return (
    <>
      {myBook.length === 0 ? (
        <Title>MyBooks пуст!</Title>
      ) : (
        myBook.map((book) => (
          <div key={book.id}>
            <MyBookListCard>
              <div>
                <SubTitle>
                  {book.id}. {book.title}
                </SubTitle>
                <Hr />
                <SubTitle>Описание:</SubTitle>
                <MyBookListDescription>
                  <h3>{book.body}</h3>
                </MyBookListDescription>
              </div>

              <ButtonGroup
                status={status}
                changeStatusBook={changeStatusBook}
                changeRemoveBook={changeRemoveBook}
                book={book}
              />
            </MyBookListCard>
          </div>
        ))
      )}
    </>
  );
};

export default MyBooksList;
