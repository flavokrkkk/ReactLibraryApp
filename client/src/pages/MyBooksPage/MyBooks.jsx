import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "../../components/MyBooksList/MyBooksList.jsx";
import { useCallback } from "react";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import Hr from "../../components/UI/Hr/Hr.jsx";

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
      <Wrapper>
        <Button
          isFullWidth
          variant={"middle-purple"}
          height={"h-2"}
          onClick={navigateTo}
        >
          Статистика
        </Button>
      </Wrapper>
      <Hr />
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
