import { useCallback } from "react";
import "./MyBookButton.scss";

const MyBookButton = ({ status, isReaded, removeBook, book }) => {
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
        <button
          className="MyBook__List-Button-Status-Disabled"
          onClick={isReading}
        >
          Прочитана
        </button>
      ) : (
        <button className="MyBook__List-Button-Status" onClick={cachingMyBook}>
          Не Прочитана
        </button>
      )}
    </div>
  );
};

export default MyBookButton;
