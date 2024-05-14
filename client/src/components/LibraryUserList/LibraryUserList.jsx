import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../store";
import { UserContainer } from "./styles.js";
import Button from "../UI/Button/Button";
import LibraryInfoStatic from "../LibraryInfoStatic/LibraryInfoStatic.jsx";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";
import Hr from "../UI/Hr/Hr.jsx";
import {
  usersSelectors,
  usersTwoSelectors,
} from "../../store/selectors/selectors.js";

const LibraryUserList = ({ status, oneBook }) => {
  const users = useSelector(usersSelectors.getUsers);
  const userTwo = useSelector(usersTwoSelectors.usersTwoNoDuplicate);
  const {
    addUserOneAction,
    addUserTwoAction,
    editStatusAction,
    removeUserTwoAction,
    setAvailableBookAction,
  } = useAction();

  const createNewUser = (userName) => {
    const customer = {
      id: Date.now(),
      name: userName,
    };
    addUserOneAction(customer);
  };

  const handlePushUser = (users) => {
    addUserTwoAction(users);
  };

  const toggleBookReadStatus = (user) => {
    removeUserTwoAction(user);
  };

  const createNewUserPrompt = () => {
    createNewUser(prompt());
  };

  useEffect(() => {
    if (oneBook.isAvailable !== userTwo.length < 3) {
      setAvailableBookAction(userTwo.length < 3);
    }
  }, [userTwo.length, handlePushUser, toggleBookReadStatus]);

  useEffect(() => {
    if (status.isOnHands === userTwo.length < 1) {
      editStatusAction(!status.isOnHands);
    }
  }, [userTwo.length, handlePushUser, toggleBookReadStatus]);

  return (
    <UserContainer>
      <Hr />
      <SubTitle>
        You can track user queues and read your favorite books!
      </SubTitle>
      <Wrapper>
        <Button
          isSmallFontSize
          variant={"light-purple"}
          onClick={createNewUserPrompt}
        >
          Sign up for the stack
        </Button>
      </Wrapper>
      <Hr />
      <LibraryInfoStatic
        users={users}
        oneBook={oneBook}
        userTwo={userTwo}
        handlePushUser={handlePushUser}
        toggleBookReadStatus={toggleBookReadStatus}
      />
    </UserContainer>
  );
};

export default LibraryUserList;
