import Button from "../UI/Button/Button";
import { UserListTwoCard } from "./styles";

const LibraryUserListTwo = ({ user, index, toggleBookReadStatus }) => {
  const handleRemoveUserById = () => {
    toggleBookReadStatus(user.id);
  };

  return (
    <UserListTwoCard>
      {`${index + 1}. ${user.name}`}
      <p>{user.email}</p>
      <div>
        <Button isFullWidth variant={"purple"} onClick={handleRemoveUserById}>
          Remove
        </Button>
      </div>
    </UserListTwoCard>
  );
};

export default LibraryUserListTwo;
