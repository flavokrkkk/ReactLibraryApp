import LibraryCatalogList from "../LibraryCatalogList/LibraryCatalogList";
import "./LibraryCatalogCard.scss";

const LibraryCatalogCard = ({ searchAndSortedBook }) => {
  return (
    <div>
      {searchAndSortedBook.length > 0 ? (
        <div className="library__catalog-card">
          {searchAndSortedBook.map((book, index) => (
            <div key={book.id}>
              <LibraryCatalogList book={book} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="library__catalog-card-zero">
          <h1>К сожалению каталог пуст!</h1>
        </div>
      )}
    </div>
  );
};

export default LibraryCatalogCard;
