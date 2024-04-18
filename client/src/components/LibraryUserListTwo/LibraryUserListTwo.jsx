import React from "react";
import "./LibraryUserListTwo.scss";
import Button from "../UI/Button/Button";

const LibraryUserListTwo = ({ userTwo, removeUserInMyBook }) => {
  return (
    <div className="user__list-wrapper-two">
      {userTwo.length > 0 ? (
        userTwo.map((user, index) => (
          <div key={user.id} className="user__list-two">
            <div>
              {index + 1} {user.name}
            </div>
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
          </div>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </div>
  );
};

export default LibraryUserListTwo;
