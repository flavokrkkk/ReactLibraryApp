import { useCallback } from "react";
import Button from "../UI/Button/Button.jsx";
import { ButtonGroupContainer } from "./styles.js";

const ButtonGroup = ({ changeStatusBook, changeRemoveBook, book, status }) => {
  const handlerCallback = useCallback(() => {
    changeStatusBook(book);
    changeRemoveBook(book.id);
  }, []);

  const changeOfStatus = () => {
    changeStatusBook(book);
  };

  return (
    <ButtonGroupContainer>
      {status.isRead.id === book.id ? (
        <Button variant={"dark-purple"} onClick={changeOfStatus}>
          Прочитана
        </Button>
      ) : (
        <Button variant={"light-purple"} onClick={handlerCallback}>
          Не прочитана
        </Button>
      )}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
