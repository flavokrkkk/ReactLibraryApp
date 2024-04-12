import { useEffect } from "react";
import { useSelector } from "react-redux";
import LibraryPageListTwo from "../LibraryPageListTwo/LibraryPageListTwo";
import { useAction } from "../../store";
import LibraryPageListOne from "../LibraryPageListOne/LibraryPageListOne";
import "./UserList.scss";
import Button from "../UI/Button/Button";
import LibraryPageList from "../LibraryPageStatic/LibraryPageList";

const UserList = ({ status, oneBook }) => {
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
  const addUser = (userName) => {
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
    addUser(prompt());
  };

  useEffect(() => {
    if (oneBook.available !== userTwo.length < 3) {
      setAvailableBookAction(userTwo.length < 3);
    }
  }, [userTwo.length, pushUserInMyBook, removeUserInMyBook]);

  useEffect(() => {
    if (status.onHands === userTwo.length < 1) {
      editStatusAction(!status.onHands);
    }
  }, [userTwo.length, pushUserInMyBook, removeUserInMyBook]);

  return (
    <div className="Library__Page-Users">
      <hr />
      <h2>
        Вы можете отслеживать очереди пользователей и читать любимые книжки!
      </h2>
      <div className="Library__Page-AddUser">
        <Button onClick={addUserPrompt}>Записаться в очередь</Button>
      </div>
      <LibraryPageList
        users={users}
        oneBook={oneBook}
        userTwo={userTwo}
        pushUserInMyBook={pushUserInMyBook}
        removeUserInMyBook={removeUserInMyBook}
      />
    </div>
  );
};

export default UserList;
