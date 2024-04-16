import { useAction } from "../../store";
import LibraryUserListOne from "../LibraryListOne/LibraryUserListOne";
import LibraryUserListTwo from "../LibraryListTwo/LibraryUserListTwo";

const LibraryStatic = ({
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
    <div className="Library__Page-Static">
      <div className="Library__Page-Static-Wrapper">
        <h2>В избранном: </h2>
        <LibraryUserListOne
          users={users}
          onRead={onRead}
          oneBook={oneBook}
          pushUserInMyBook={pushUserInMyBook}
        />
      </div>

      <div className="Library__Page-Static-Wrapper">
        <h2>В MyBooks: </h2>
        <LibraryUserListTwo
          userTwo={userTwo}
          removeUserInMyBook={removeUserInMyBook}
        />
      </div>
    </div>
  );
};

export default LibraryStatic;
