import { useAction } from "../../store";
import LibraryUserListOne from "../LibraryUserListOne/LibraryUserListOne.jsx";
import LibraryUserListTwo from "../LibraryUserListTwo/LibraryUserListTwo.jsx";
import * as S from "./styles.js";
import * as C from "../../styles/components.js";

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
    <S.StaticContainer>
      <div>
        <C.SubTitle>В избранном: </C.SubTitle>
        <LibraryUserListOne
          users={users}
          removeHandler={removeHandler}
          oneBook={oneBook}
          pushUserInMyBook={pushUserInMyBook}
        />
      </div>

      <div>
        <C.SubTitle>В MyBooks: </C.SubTitle>
        <LibraryUserListTwo
          userTwo={userTwo}
          removeUserInMyBook={removeUserInMyBook}
        />
      </div>
    </S.StaticContainer>
  );
};

export default LibraryInfoStatic;
