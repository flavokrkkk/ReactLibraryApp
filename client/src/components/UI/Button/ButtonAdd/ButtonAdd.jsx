import "./ButtonAdd.scss";

const ButtonAdd = ({ myBooksId, addMyBook, oneBook }) => {
  return (
    <div>
      {myBooksId(oneBook.id) ? (
        <button className="Library__Page-Button" disabled>
          Добавлена в MyBooks
        </button>
      ) : oneBook.available === false ? (
        <button className="Library__Page-Button" disabled>
          Добавлена в MyBooks
        </button>
      ) : (
        <button className="Library__Page-Button" onClick={addMyBook}>
          Добавить в MyBooks
        </button>
      )}
    </div>
  );
};

export default ButtonAdd;