import React from "react";
import * as S from "./styles.js";
import Button from "../UI/Button/Button.jsx";

const LibraryUserListTwo = ({ userTwo, removeUserInMyBook }) => {
  return (
    <>
      {userTwo.length > 0 ? (
        userTwo.map((user, index) => (
          <S.UserListTwoContainer>
            <S.UserListTwoCard>
              {index + 1} {user.name}
              <p>{user.email}</p>
              <div>
                <Button
                  isFullWidth={true}
                  variant={"purple"}
                  onClick={() => removeUserInMyBook(user.id)}
                >
                  Remove
                </Button>
              </div>
            </S.UserListTwoCard>
          </S.UserListTwoContainer>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryUserListTwo;
