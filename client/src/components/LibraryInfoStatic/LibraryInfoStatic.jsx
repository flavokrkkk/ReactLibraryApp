import { useAction } from "../../store";
import { StaticContainer } from "./styles.js";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";
import LibraryUserItemOne from ".././LibraryUserItemOne/LibraryUserItemOne.jsx";
import LibraryUserItemTwo from ".././LibraryUserItemTwo/LibraryUserItemTwo.jsx";

const LibraryInfoStatic = ({
  users,
  oneBook,
  userTwo,
  handlePushUser,
  toggleBookReadStatus,
}) => {
  const { removeUserAction } = useAction();

  const handleRemoveUser = (id) => {
    removeUserAction(id);
  };

  return (
    <StaticContainer>
      <div>
        <SubTitle>Favorites: </SubTitle>
        <LibraryUserItemOne
          users={users}
          oneBook={oneBook}
          handleRemoveUser={handleRemoveUser}
          handlePushUser={handlePushUser}
        />
      </div>

      <div>
        <SubTitle>В MyBooks: </SubTitle>
        <LibraryUserItemTwo
          userTwo={userTwo}
          toggleBookReadStatus={toggleBookReadStatus}
        />
      </div>
    </StaticContainer>
  );
};

export default LibraryInfoStatic;
