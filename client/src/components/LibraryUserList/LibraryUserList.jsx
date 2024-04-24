import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../store";
import { UserContainer } from "./styles.js";
import Button from "../UI/Button/Button";
import LibraryInfoStatic from "../LibraryInfoStatic/LibraryInfoStatic.jsx";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";
import Hr from "../UI/Hr/Hr.jsx";

const LibraryUserList = ({ status, oneBook }) => {
  //Получаем списки userов из store
  const users = useSelector((state) => state.users.users);
  const userTwo = useSelector((state) => state.usersTwo.usersTwo);
  const {
    addUserOneAction,
    addUserTwoAction,
    editStatusAction,
    removeMyBooksAction,
    removeUserTwoAction,
    setAvailableBookAction,
  } = useAction();

  //Функция добавления usera в очередь за книгой
  const addHandler = (userName) => {
    const customer = {
      id: Date.now(),
      name: userName,
    };
    addUserOneAction(customer);
  };

  //Функция добавления userов которые добавили в myBook
  const pushUserInMyBook = (users) => {
    addUserTwoAction(users);
  };

  //Функция удаления пользователей из myBook
  const removeUserInMyBook = (user) => {
    removeUserTwoAction(user);
    if (userTwo[0].id === 101) {
      removeMyBooksAction(user.id);
    }
  };

  const addUserPrompt = () => {
    addHandler(prompt());
  };

  useEffect(() => {
    if (oneBook.isAvailable !== userTwo.length < 3) {
      setAvailableBookAction(userTwo.length < 3);
    }
  }, [userTwo.length, pushUserInMyBook, removeUserInMyBook]);

  useEffect(() => {
    if (status.isOnHands === userTwo.length < 1) {
      editStatusAction(!status.isOnHands);
    }
  }, [userTwo.length, pushUserInMyBook, removeUserInMyBook]);

  return (
    <UserContainer>
      <Hr />
      <SubTitle>
        Вы можете отслеживать очереди пользователей и читать любимые книжки!
      </SubTitle>
      <Wrapper>
        <Button
          variant={"light-purple"}
          isSmallFontSize={true}
          onClick={addUserPrompt}
        >
          Записаться в очередь
        </Button>
      </Wrapper>
      <Hr />
      <LibraryInfoStatic
        users={users}
        oneBook={oneBook}
        userTwo={userTwo}
        pushUserInMyBook={pushUserInMyBook}
        removeUserInMyBook={removeUserInMyBook}
      />
    </UserContainer>
  );
};

export default LibraryUserList;
