import LibraryCatalogList from "../LibraryCatalogList/LibraryCatalogList.jsx";
import Title from "../Title/Title.jsx";
import * as S from "./styles.js";
const LibraryCatalogCard = ({ searchAndSortedBook }) => {
  return (
    <>
      {searchAndSortedBook.length > 0 ? (
        <S.CatalogCard>
          {searchAndSortedBook.map((book, index) => (
            <div key={book.id}>
              <LibraryCatalogList book={book} index={index} />
            </div>
          ))}
        </S.CatalogCard>
      ) : (
        <S.CatalogCardNone>
          <Title>К сожалению каталог пуст!</Title>
        </S.CatalogCardNone>
      )}
    </>
  );
};

export default LibraryCatalogCard;
