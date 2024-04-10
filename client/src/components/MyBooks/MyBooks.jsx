import { useDispatch, useSelector } from "react-redux";
import "./MyBooks.scss";
import { EDIT_STATUS } from "../../store/statusReducer";
import { REMOVE_MYBOOKS } from "../../store/myBooksReducer";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { STATIC } from "../../utils/const";
import MyBooksList from "./MyBooksList";
import { useCallback } from "react";

const MyBooks = () => {
  const myBook = useSelector((state) => state.myBook.myBook);
  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isReaded = (book) => {
    dispatch({ type: EDIT_STATUS, payload: book });
  };

  const navigateTo = useCallback(() => {
    navigate(STATIC);
  }, []);

  const removeBook = (id) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_MYBOOKS, payload: id });
    }, 500);
    console.log("remove");
  };

  return (
    <div className="MyBooks__Container">
      <h1 className="MyBooks__Title">MyBooks</h1>
      <div className="MyBooks__Button-Static">
        <Button onClick={navigateTo} style={{ width: "80%" }}>
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
