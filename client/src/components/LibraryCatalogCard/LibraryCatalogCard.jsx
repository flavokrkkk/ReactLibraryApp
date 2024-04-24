import LibraryCatalogList from "../LibraryCatalogList/LibraryCatalogList.jsx";
import Title from "../UI/Title/Title.jsx";
import { CatalogCard, CatalogCardNone } from "./styles.js";

const LibraryCatalogCard = ({ searchAndSortedBook }) => {
  return (
    <>
      {searchAndSortedBook.length > 0 ? (
        <CatalogCard>
          {searchAndSortedBook.map((book, index) => (
            <div key={book.id}>
              <LibraryCatalogList book={book} index={index} />
            </div>
          ))}
        </CatalogCard>
      ) : (
        <CatalogCardNone>
          <Title>К сожалению каталог пуст!</Title>
        </CatalogCardNone>
      )}
    </>
  );
};

export default LibraryCatalogCard;
