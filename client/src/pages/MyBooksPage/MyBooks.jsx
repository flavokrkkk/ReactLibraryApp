import { useSelector } from "react-redux";
import "./MyBooks.scss";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "../../components/MyBooks/MyBooksList";
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
    setTimeout(() => {
      removeMyBooksAction(id);
    }, 500);
    console.log("remove");
  };

  return (
    <div className="MyBooks__Container">
      <h1 className="MyBooks__Title">MyBooks</h1>
      <div className="MyBooks__Button-Static">
        <Button onClick={navigateTo}>Статистика</Button>
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
