import { useCallback } from "react";
import { UserListOneContainer, UserListOneCard } from "./LibraryUserListOne.js";
import Button from "../UI/Button/Button.jsx";

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
          <UserListOneContainer key={user.id}>
            <UserListOneCard>
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
            </UserListOneCard>
          </UserListOneContainer>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryUserListOne;
