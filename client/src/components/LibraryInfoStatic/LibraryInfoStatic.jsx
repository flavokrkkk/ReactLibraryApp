import { useAction } from "../../store";
import LibraryUserListOne from "../LibraryUserListOne/LibraryUserListOne.jsx";
import LibraryUserListTwo from "../LibraryUserListTwo/LibraryUserListTwo.jsx";
import "./LibraryInfoStatic.js";
import { StaticContainer } from "./LibraryInfoStatic.js";

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
    <StaticContainer>
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
    </StaticContainer>
  );
};

export default LibraryInfoStatic;
