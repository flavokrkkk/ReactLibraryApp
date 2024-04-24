import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";
import * as S from "./styles.js";

const LibraryCatalogList = ({ book, index }) => {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    navigate(`/info/${book.id}`);
  }, []);

  return (
    <S.BookCard>
      <S.BookCardTitle>
        {index + 1}. {book.title}
      </S.BookCardTitle>
      <S.BookCardDescription>{book.body}</S.BookCardDescription>
      <div>
        <h3>Онлайн-библиотека Sbook</h3>
      </div>
      <div>
        <Button height={"h-2"} variant={"light-purple"} onClick={navigateTo}>
          Хочу прочитать
        </Button>
      </div>
    </S.BookCard>
  );
};

export default LibraryCatalogList;
