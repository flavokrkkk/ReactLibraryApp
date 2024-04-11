import LibraryList from "../LibraryList/LibraryList";
import "./LibraryCatalogList.scss";

const LibaryCatalogList = ({ searchAndSortedBook }) => {
  return (
    <div>
      {searchAndSortedBook.length > 0 ? (
        <div className="Library__Catalog-List">
          {searchAndSortedBook.map((book, index) => (
            <div key={index}>
              <LibraryList book={book} index={index} />
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

export default LibaryCatalogList;
