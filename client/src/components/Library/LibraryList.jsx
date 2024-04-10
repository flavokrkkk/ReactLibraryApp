import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LibraryList = ({ book, index }) => {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    navigate(`/info/${book.id}`);
  }, []);

  return (
    <div className="Library__Catalog-Item" onClick={navigateTo}>
      <div className="Library__Catalog-Item-Title">
        {index + 1}. {book.title}
      </div>
      <div className="Library__Catalog-Item-Descr">{book.body}</div>
      <div className="Library__Catalog-Item-Author">
        <h1 style={{ fontWeight: 400, textTransform: "uppercase" }}>
          Онлайн-библиотека Sbook
        </h1>
      </div>
      <button onClick={navigateTo} className="Library__Button-Item">
        Хочу прочитать
      </button>
    </div>
  );
};

export default LibraryList;
