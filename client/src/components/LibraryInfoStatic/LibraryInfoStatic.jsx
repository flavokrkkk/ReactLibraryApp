import { useAction } from "../../store";
import LibraryUserListOne from "../LibraryUserListOne/LibraryUserListOne";
import LibraryUserListTwo from "../LibraryUserListTwo/LibraryUserListTwo";
import "./LibraryInfoStatic.scss";

const LibraryInfoStatic = ({
  users,
  oneBook,
  pushUserInMyBook,
  removeUserInMyBook,
  userTwo,
}) => {
  const { removeUserAction } = useAction();

  //Функция удаления пользователя
  const onRead = (id) => {
    removeUserAction(id);
  };

  return (
    <div className="library__info-static">
      <div>
        <h2>В избранном: </h2>
        <LibraryUserListOne
          users={users}
          onRead={onRead}
          oneBook={oneBook}
          pushUserInMyBook={pushUserInMyBook}
        />
      </div>

      <div>
        <h2>В MyBooks: </h2>
        <LibraryUserListTwo
          userTwo={userTwo}
          removeUserInMyBook={removeUserInMyBook}
        />
      </div>
    </div>
  );
};

export default LibraryInfoStatic;
