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
    <div className="MyBook__List-Button">
      {status.readed.id === book.id ? (
        <div className="MyBook__List-Button-Status-Disabled">
          <Button onClick={isReading}>Прочитана</Button>
        </div>
      ) : (
        <div className="MyBook__List-Button-Status">
          <Button onClick={cachingMyBook}>Не Прочитана</Button>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
