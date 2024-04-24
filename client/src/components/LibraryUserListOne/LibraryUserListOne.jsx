import { useCallback } from "react";
import { UserListOneCard, UserListOneContainer } from "./styles.js";
import Button from "../UI/Button/Button.jsx";
import { useSelector } from "react-redux";
const LibraryUserListOne = ({
  users,
  removeHandler,
  pushUserInMyBook,
  oneBook,
}) => {
  const userTwo = useSelector((state) => state.usersTwo.usersTwo);
  const actionWithUser = useCallback((user) => {
    pushUserInMyBook(user);
    removeHandler(user.id);
  }, []);

  const bool = oneBook.isAvailable === true ? false : true;
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
