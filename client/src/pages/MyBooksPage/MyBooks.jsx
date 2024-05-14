import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "../../components/MyBooksList/MyBooksList.jsx";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import Hr from "../../components/UI/Hr/Hr.jsx";
import {
  myBookSelectors,
  statusSelectors,
} from "../../store/selectors/selectors.js";

const MyBooks = () => {
  const myBook = useSelector(myBookSelectors.getMyBooks);
  const status = useSelector(statusSelectors.getStatus);

  const { editStatusBookAction, removeMyBooksAction } = useAction();

  const navigate = useNavigate();

  const toggleBookStatus = (book) => {
    editStatusBookAction(book);
  };

  const handleNavigation = () => {
    navigate(STATIC);
  };

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
          onClick={handleNavigation}
        >
          Statistics
        </Button>
      </Wrapper>
      <Hr />
      <MyBooksList
        status={status}
        myBook={myBook}
        changeRemoveBook={changeRemoveBook}
        toggleBookStatus={toggleBookStatus}
      />
    </Container>
  );
};

export default MyBooks;
