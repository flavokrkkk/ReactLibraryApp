import { UserListTwoContainer } from "./styles.js";
import LibraryUserListTwo from "../LibraryUserListTwo/LibraryUserListTwo.jsx";

const LibraryUserItemTwo = ({ userTwo, toggleBookReadStatus }) => {
  const hasIsLength = userTwo.length > 0;
  return (
    <>
      {hasIsLength ? (
        userTwo.map((user, index) => (
          <UserListTwoContainer key={user.id}>
            <LibraryUserListTwo
              index={index}
              user={user}
              toggleBookReadStatus={toggleBookReadStatus}
            />
          </UserListTwoContainer>
        ))
      ) : (
        <h3>Users have not added books yet!</h3>
      )}
    </>
  );
};

export default LibraryUserItemTwo;
