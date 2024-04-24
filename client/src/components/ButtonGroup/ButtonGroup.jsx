import { useCallback } from "react";
import Button from "../UI/Button/Button.jsx";
import { ButtonGroupContainer } from "./styles.js";

const ButtonGroup = ({ bool, changeStatusBook, changeRemoveBook, book }) => {
  const handlerCallback = useCallback(() => {
    changeStatusBook(book);
    changeRemoveBook(book.id);
  }, []);

  const changeOfStatus = () => {
    changeStatusBook(book);
  };

  return (
    <ButtonGroupContainer>
      {bool ? (
        <Button variant={"dark-purple"} onClick={changeOfStatus}>
          Доступна
        </Button>
      ) : (
        <Button variant={"light-purple"} onClick={handlerCallback}>
          Не доступна
        </Button>
      )}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
