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
    <div className="user__list-wrapper-one">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={user.id}>
            <div className="user__list-one">
              {index + 1}. {user.name}
              <p>{user.email}</p>
              <div>
                <Button
                  isFullWidth={true}
                  variant="purple"
                  onClick={() => actionWithUser(user)}
                  isDisabled={bool}
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
