import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";
import {
  BookCard,
  BookCardDescription,
  BookCardTitle,
} from "./LibraryCatalogList.js";

const LibraryCatalogList = ({ book, index }) => {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    navigate(`/info/${book.id}`);
  }, []);

  return (
    <BookCard>
      <BookCardTitle>
        {index + 1}. {book.title}
      </BookCardTitle>
      <BookCardDescription>{book.body}</BookCardDescription>
      <div>
        <h3>Онлайн-библиотека Sbook</h3>
      </div>
      <div>
        <Button height={"h-2"} variant={"light-purple"} onClick={navigateTo}>
          Хочу прочитать
        </Button>
      </div>
    </BookCard>
  );
};

export default LibraryCatalogList;
