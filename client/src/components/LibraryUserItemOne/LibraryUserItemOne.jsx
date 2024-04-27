import { UserListOneContainer } from "./styles.js";
import LibraryUserListOne from "../LibraryUserListOne/LibraryUserListOne.jsx";
const LibraryUserItemOne = ({
  users,
  handleRemoveUser,
  handlePushUser,
  oneBook,
}) => {
  const isAccessible = !oneBook.isAvailable;
  const hasIsLength = users.length > 0;

  return (
    <>
      {hasIsLength > 0 ? (
        users.map((user, index) => (
          <UserListOneContainer key={user.id}>
            <LibraryUserListOne
              handleRemoveUser={handleRemoveUser}
              handlePushUser={handlePushUser}
              isAccessible={isAccessible}
              index={index}
              user={user}
            />
          </UserListOneContainer>
        ))
      ) : (
        <h3>Users have not added books yet!</h3>
      )}
    </>
  );
};

export default LibraryUserItemOne;
