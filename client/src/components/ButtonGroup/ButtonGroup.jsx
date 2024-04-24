import { useCallback } from "react";
import Button from "../UI/Button/Button.jsx";
import * as S from "./styles.js";

const ButtonGroup = ({ bool, changeStatusBook, changeRemoveBook, book }) => {
  const handlerCallback = useCallback(() => {
    changeStatusBook(book);
    changeRemoveBook(book.id);
  }, []);

  const changeOfStatus = () => {
    changeStatusBook(book);
  };

  return (
    <S.ButtonGroupContainer>
      {bool ? (
        <Button variant={"dark-purple"} onClick={changeOfStatus}>
          Доступна
        </Button>
      ) : (
        <Button variant={"light-purple"} onClick={handlerCallback}>
          Не доступна
        </Button>
      )}
    </S.ButtonGroupContainer>
  );
};

export default ButtonGroup;
