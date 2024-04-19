import { useCallback } from "react";
import Button from "../UI/Button/Button.jsx";
import { ButtonGroupContainer } from "./ButtonGroup";

const ButtonGroup = ({ status, isReaded, removeBook, book }) => {
  const cachingMyBook = useCallback(() => {
    isReaded(book);
    removeBook(book.id);
  }, []);

  const isReading = () => {
    isReaded(book);
  };

  return (
    <ButtonGroupContainer>
      {status.readed.id === book.id ? (
        <Button variant={"dark-purple"} onClick={isReading}>
          Прочитана
        </Button>
      ) : (
        <Button variant={"light-purple"} onClick={cachingMyBook}>
          Не Прочитана
        </Button>
      )}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
