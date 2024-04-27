import { UserListOneContainer } from "./styles.js";
import LibraryUserListOne from "../LibraryUserListOne/LibraryUserListOne.jsx";
const LibraryUserItemOne = ({
  users,
  oneBook,
  handleRemoveUser,
  handlePushUser,
}) => {
  const isAccessible = !oneBook.isAvailable;
  const hasIsLength = users.length > 0;

  return (
    <>
      {hasIsLength > 0 ? (
        users.map((user, index) => (
          <UserListOneContainer key={user.id}>
            <LibraryUserListOne
              isAccessible={isAccessible}
              index={index}
              user={user}
              handleRemoveUser={handleRemoveUser}
              handlePushUser={handlePushUser}
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
