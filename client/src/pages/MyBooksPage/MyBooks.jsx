import { useSelector } from "react-redux";
import "./MyBooks.scss";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "../../components/MyBooksList/MyBooksList";
import { useCallback } from "react";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";

const MyBooks = () => {
  const myBook = useSelector((state) => state.myBook.myBook);
  const status = useSelector((state) => state.status.status);

  const { editStatusBookAction, removeMyBooksAction } = useAction();

  const navigate = useNavigate();

  const isReaded = (book) => {
    editStatusBookAction(book);
  };

  const navigateTo = useCallback(() => {
    navigate(STATIC);
  }, []);

  const removeBook = (id) => {
    removeMyBooksAction(id);
  };

  return (
    <Container>
      <Title>MyBooks</Title>
      <div className="myBooks__button-static">
        <Button
          isFullWidth={true}
          variant={"middle-purple"}
          height={"h-2"}
          onClick={navigateTo}
        >
          Статистика
        </Button>
      </div>
      <hr />
      <MyBooksList
        status={status}
        myBook={myBook}
        removeBook={removeBook}
        isReaded={isReaded}
      />
    </Container>
  );
};

export default MyBooks;
