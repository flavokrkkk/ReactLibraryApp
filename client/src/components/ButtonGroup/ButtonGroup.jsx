import { useCallback } from "react";
import Button from "../UI/Button/Button.jsx";
import { ButtonGroupContainer } from "./styles.js";

const ButtonGroup = ({ book, status, toggleBookStatus, changeRemoveBook }) => {
  const handleRemoveBook = useCallback(() => {
    toggleBookStatus(book);
    changeRemoveBook(book.id);
  }, []);

  const isHasMatch = status.isRead.id === book.id;

  return (
    <ButtonGroupContainer>
      <Button
        variant={isHasMatch ? "dark-purple" : "light-purple"}
        onClick={handleRemoveBook}
      >
        {isHasMatch ? "Read" : "Unread"}
      </Button>
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
