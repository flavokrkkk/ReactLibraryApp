import { useSelector } from "react-redux";
import "./MyBooks.scss";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "./MyBooksList";
import { useCallback } from "react";
import { useAction } from "../../store";

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
        <button onClick={navigateTo} style={{ width: "80%" }}>
          Статистика
        </button>
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
