import LibraryCatalogList from "../LibraryCatalogList/LibraryCatalogList";
import "./LibraryCatalogCard.scss";

const LibraryCatalogCard = ({ searchAndSortedBook }) => {
  return (
    <div>
      {searchAndSortedBook.length > 0 ? (
        <div className="Library__Catalog-List">
          {searchAndSortedBook.map((book, index) => (
            <div key={book.id}>
              <LibraryCatalogList book={book} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="Library__Catalog-List-Zero">
          <h1>К сожалению каталог пуст!</h1>
        </div>
      )}
    </div>
  );
};

export default LibraryCatalogCard;
