import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";
import Title from "../Title/Title.jsx";
import * as S from "./styles.js";
import * as C from "../../styles/components.js";
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
            <S.MyBookListCard>
              <div>
                <C.SubTitle>
                  {book.id}. {book.title}
                </C.SubTitle>
                <C.Hr />
                <C.SubTitle>Описание:</C.SubTitle>
                <S.MyBookListDescription>
                  <h3>{book.body}</h3>
                </S.MyBookListDescription>
              </div>

              <ButtonGroup
                status={status}
                changeStatusBook={changeStatusBook}
                changeRemoveBook={changeRemoveBook}
                book={book}
              />
            </S.MyBookListCard>
          </div>
        ))
      )}
    </>
  );
};

export default MyBooksList;
