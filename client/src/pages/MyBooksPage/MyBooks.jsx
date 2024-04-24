import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "../../components/MyBooksList/MyBooksList.jsx";
import { useCallback } from "react";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button.jsx";
import * as C from "../../styles/components.js";
import Container from "../../components/Container/Container.jsx";
import Title from "../../components/Title/Title.jsx";

const MyBooks = () => {
  const myBook = useSelector((state) => state.myBook.myBook);
  const status = useSelector((state) => state.status.status);

  const { editStatusBookAction, removeMyBooksAction } = useAction();

  const navigate = useNavigate();

  const changeStatusBook = (book) => {
    editStatusBookAction(book);
  };

  const navigateTo = useCallback(() => {
    navigate(STATIC);
  }, []);

  const changeRemoveBook = (id) => {
    removeMyBooksAction(id);
  };

  return (
    <Container>
      <Title>MyBooks</Title>
      <C.Wrapper>
        <Button
          isFullWidth={true}
          variant={"middle-purple"}
          height={"h-2"}
          onClick={navigateTo}
        >
          Статистика
        </Button>
      </C.Wrapper>
      <C.Hr />
      <MyBooksList
        status={status}
        myBook={myBook}
        changeRemoveBook={changeRemoveBook}
        changeStatusBook={changeStatusBook}
      />
    </Container>
  );
};

export default MyBooks;
