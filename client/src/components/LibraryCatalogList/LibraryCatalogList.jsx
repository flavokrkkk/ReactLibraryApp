import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LibraryCatalogList.scss";
import Button from "../UI/Button/Button";

const LibraryCatalogList = ({ book, index }) => {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    navigate(`/info/${book.id}`);
  }, []);

  return (
    <div className="library__catalog-list">
      <div className="library__catalog-list-title">
        {index + 1}. {book.title}
      </div>
      <div className="library_catalog-list-description">{book.body}</div>
      <div className="library__catalog-list-author">
        <h1 className="library__catalog-list-author-title">
          Онлайн-библиотека Sbook
        </h1>
      </div>
      <div>
        <Button height={"h-2"} variant={"light-purple"} onClick={navigateTo}>
          Хочу прочитать
        </Button>
      </div>
    </div>
  );
};

export default LibraryCatalogList;
