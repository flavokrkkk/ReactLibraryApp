import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import LibraryPageListTwo from "../LibraryPageListTwo/LibraryPageListTwo";
import { useAction } from "../../store";
import LibraryPageList from "../LibraryPageList/LibraryPageList";
import "./UserList.scss";

const UserList = ({ status, oneBook }) => {
  //Получаем списки userов из store
  const users = useSelector((state) => state.users.users);
  const userTwo = useSelector((state) => state.usersTwo.usersTwo);
  const {
    addUserOneAction,
    addUserTwoAction,
    editStatusAction,
    removeMyBooksAction,
    removeUserAction,
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

  //Функция удаления пользователя
  const onRead = (id) => {
    removeUserAction(id);
  };

  //Функция добавления userов которые добавили в myBook
  const pushUserInMyBook = (users) => {
    addUserTwoAction(users);
  };

  //Функция удаления пользователей из myBook
  const removeUserinMyBook = (user) => {
    removeUserTwoAction(user);
    if (userTwo[0].id === 101) {
      removeMyBooksAction(user.id);
    }
  };

  useEffect(() => {
    if (oneBook.available !== userTwo.length < 3) {
      setAvailableBookAction(userTwo.length < 3);
    }
  }, [userTwo.length, pushUserInMyBook, removeUserinMyBook]);

  useEffect(() => {
    if (status.onHands === userTwo.length < 1) {
      editStatusAction(!status.onHands);
    }
  }, [userTwo.length, pushUserInMyBook, removeUserinMyBook]);

  return (
    <div className="Library__Page-Users">
      <hr />
      <h2>
        Вы можете отслеживать очереди пользователей и читать любимые книжки!
      </h2>
      <div className="Library__Page-AddUser">
        <Button onClick={() => addUser(prompt())}>Записаться в очередь</Button>
      </div>

      <div className="Library__Page-Static">
        <div>
          <h2>В избранном: </h2>
          <LibraryPageList
            users={users}
            onRead={onRead}
            oneBook={oneBook}
            pushUserInMyBook={pushUserInMyBook}
          />
        </div>

        <div>
          <h2>В MyBooks: </h2>
          <LibraryPageListTwo
            userTwo={userTwo}
            removeUserinMyBook={removeUserinMyBook}
          />
        </div>
      </div>
    </div>
  );
};

export default UserList;
