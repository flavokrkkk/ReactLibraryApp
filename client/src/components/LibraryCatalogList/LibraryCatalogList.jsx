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
    <div className="Library__Catalog-Item">
      <div className="Library__Catalog-Item-Title">
        {index + 1}. {book.title}
      </div>
      <div className="Library__Catalog-Item-Descr">{book.body}</div>
      <div className="Library__Catalog-Item-Author">
        <h1 className="Library__Catalog-Item-Author-Title">
          Онлайн-библиотека Sbook
        </h1>
      </div>
      <div>
        <Button onClick={navigateTo}>Хочу прочитать</Button>
      </div>
    </div>
  );
};

export default LibraryCatalogList;
