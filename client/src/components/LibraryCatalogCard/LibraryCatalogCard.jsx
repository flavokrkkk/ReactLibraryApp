import LibraryCatalogList from "../LibraryCatalogList/LibraryCatalogList.jsx";
import Title from "../Title/Title.jsx";
import { CatalogCard, CatalogCardNone } from "./LibraryCatalogCard.js";
const LibraryCatalogCard = ({ searchAndSortedBook }) => {
  return (
    <div>
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
    </div>
  );
};

export default LibraryCatalogCard;
