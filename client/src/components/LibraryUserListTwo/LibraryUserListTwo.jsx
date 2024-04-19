import React from "react";
import { UserListTwoCard, UserListTwoContainer } from "./LibraryUserListTwo.js";
import Button from "../UI/Button/Button.jsx";

const LibraryUserListTwo = ({ userTwo, removeUserInMyBook }) => {
  return (
    <>
      {userTwo.length > 0 ? (
        userTwo.map((user, index) => (
          <UserListTwoContainer>
            <UserListTwoCard>
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
            </UserListTwoCard>
          </UserListTwoContainer>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryUserListTwo;
