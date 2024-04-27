import { useCallback } from "react";
import "./ButtonGroup.scss";
import Button from "../UI/Button/Button";

const ButtonGroup = ({ status, isReaded, removeBook, book }) => {
  const cachingMyBook = useCallback(() => {
    isReaded(book);
    removeBook(book.id);
  }, []);

  const isReading = () => {
    isReaded(book);
  };

  return (
    <div className="myBook__list-button">
      {status.readed.id === book.id ? (
        <div>
          <Button variant={"dark-purple"} onClick={isReading}>
            Прочитана
          </Button>
        </div>
      ) : (
        <div>
          <Button variant={"light-purple"} onClick={cachingMyBook}>
            Не Прочитана
          </Button>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
