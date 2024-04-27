import Button from "../UI/Button/Button";
import { UserListOneCard } from "./styles";

const LibraryUserListOne = ({
  isAccessible,
  user,
  index,
  handlePushUser,
  handleRemoveUser,
}) => {
  const handleWithUser = () => {
    handlePushUser(user);
    handleRemoveUser(user.id);
  };

  return (
    <div>
      <UserListOneCard>
        {`${index + 1}. ${user.name}`}
        <p>{user.email}</p>
        <div>
          <Button
            isFullWidth
            isDisabled={isAccessible}
            variant="purple"
            onClick={handleWithUser}
          >
            Push To MyBooks
          </Button>
        </div>
      </UserListOneCard>
    </div>
  );
};

export default LibraryUserListOne;
