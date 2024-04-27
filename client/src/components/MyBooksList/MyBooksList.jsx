import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";
import { MyBookListCard, MyBookListDescription } from "./styles.js";
import Title from "../UI/Title/Title.jsx";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";
import Hr from "../UI/Hr/Hr.jsx";
const MyBooksList = ({
  myBook,
  status,
  toggleBookStatus,
  changeRemoveBook,
}) => {
  const hasIsLength = myBook.length === 0;

  return (
    <>
      {hasIsLength ? (
        <Title>MyBooks empty!</Title>
      ) : (
        myBook.map((book) => (
          <div key={book.id}>
            <MyBookListCard>
              <div>
                <SubTitle>{`${book.id}. ${book.title}`}</SubTitle>
                <Hr />
                <SubTitle>Description:</SubTitle>
                <MyBookListDescription>
                  <h3>{book.body}</h3>
                </MyBookListDescription>
              </div>

              <ButtonGroup
                status={status}
                toggleBookStatus={toggleBookStatus}
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
