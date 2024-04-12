import { useAction } from "../../store";
import LibraryPageListOne from "../LibraryPageListOne/LibraryPageListOne";
import LibraryPageListTwo from "../LibraryPageListTwo/LibraryPageListTwo";

const LibraryPageList = ({
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
        <LibraryPageListOne
          users={users}
          onRead={onRead}
          oneBook={oneBook}
          pushUserInMyBook={pushUserInMyBook}
        />
      </div>

      <div className="Library__Page-Static-Wrapper">
        <h2>В MyBooks: </h2>
        <LibraryPageListTwo
          userTwo={userTwo}
          removeUserInMyBook={removeUserInMyBook}
        />
      </div>
    </div>
  );
};

export default LibraryPageList;
