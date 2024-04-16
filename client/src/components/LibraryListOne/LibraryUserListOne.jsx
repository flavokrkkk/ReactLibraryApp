import { useCallback } from "react";
import "./LibraryUserListOne.scss";
import Button from "../UI/Button/Button";

const LibraryUserListOne = ({ users, onRead, pushUserInMyBook, oneBook }) => {
  const actionWithUser = useCallback((user) => {
    pushUserInMyBook(user);
    onRead(user.id);
  }, []);

  const bool = oneBook.available === true ? false : true;

  return (
    <>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <div className="Library__Page-User">
              {index + 1}. {user.name}
              <p>{user.email}</p>
              <div className="Library__Page-User-Button">
                <Button onClick={() => actionWithUser(user)} disabled={bool}>
                  Push To MyBooks
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryUserListOne;
