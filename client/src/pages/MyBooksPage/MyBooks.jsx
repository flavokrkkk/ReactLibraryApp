import { useSelector } from "react-redux";
import "./MyBooks.scss";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "../../components/MyBooksList/MyBooksList";
import { useCallback } from "react";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button";

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
    <div className="myBooks__container">
      <h1 className="myBooks__title">MyBooks</h1>
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
    </div>
  );
};

export default MyBooks;
