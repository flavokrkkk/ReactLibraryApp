import { useCallback } from "react";

const LibraryPageList = ({ users, onRead, pushUserInMyBook, oneBook }) => {
  const actionWithUser = useCallback((user) => {
    pushUserInMyBook(user);
    onRead(user.id);
  }, []);

  return (
    <>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <div className="Libray__Page-User">
              {index + 1}. {user.name}
              <p>{user.email}</p>
              {oneBook.available === true ? (
                <button
                  className="Libray__Page-User-Button"
                  onClick={() => actionWithUser(user)}
                >
                  push to myBook
                </button>
              ) : (
                <button disabled className="Libray__Page-User-Button">
                  push to myBook
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryPageList;
