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
    <div className="User__List-Wrapper-One">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <div className="Library__Page-User">
              {index + 1}. {user.name}
              <p>{user.email}</p>
              <div>
                <Button
                  isWidth={true}
                  variant="purple"
                  onClick={() => actionWithUser(user)}
                  disabled={bool}
                >
                  Push To MyBooks
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </div>
  );
};

export default LibraryUserListOne;
