import LibraryCatalogList from "../LibraryCatalogList/LibraryCatalogList.jsx";
import Title from "../UI/Title/Title.jsx";
import { CatalogCard, CatalogCardNone } from "./styles.js";

const LibraryCatalogCard = ({ memoizedSortedBook }) => {
  const hasIsLength = memoizedSortedBook.length > 0;

  return (
    <>
      {hasIsLength ? (
        <CatalogCard>
          {memoizedSortedBook.map((book, index) => (
            <div key={book.id}>
              <LibraryCatalogList book={book} index={index} />
            </div>
          ))}
        </CatalogCard>
      ) : (
        <CatalogCardNone>
          <Title>Unfortunately the directory is empty!</Title>
        </CatalogCardNone>
      )}
    </>
  );
};

export default LibraryCatalogCard;
