import { useAction } from "../../store";
import LibraryUserListOne from "../LibraryUserListOne/LibraryUserListOne.jsx";
import LibraryUserListTwo from "../LibraryUserListTwo/LibraryUserListTwo.jsx";
import { StaticContainer } from "./styles.js";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";

const LibraryInfoStatic = ({
  users,
  oneBook,
  pushUserInMyBook,
  removeUserInMyBook,
  userTwo,
}) => {
  const { removeUserAction } = useAction();

  //Функция удаления пользователя
  const removeHandler = (id) => {
    removeUserAction(id);
  };

  return (
    <StaticContainer>
      <div>
        <SubTitle>В избранном: </SubTitle>
        <LibraryUserListOne
          users={users}
          removeHandler={removeHandler}
          oneBook={oneBook}
          pushUserInMyBook={pushUserInMyBook}
        />
      </div>

      <div>
        <SubTitle>В MyBooks: </SubTitle>
        <LibraryUserListTwo
          userTwo={userTwo}
          removeUserInMyBook={removeUserInMyBook}
        />
      </div>
    </StaticContainer>
  );
};

export default LibraryInfoStatic;
