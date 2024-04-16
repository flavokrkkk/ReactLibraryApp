import React from "react";
import "./LibraryUserListTwo.scss";
import Button from "../UI/Button/Button";

const LibraryUserListTwo = ({ userTwo, removeUserInMyBook }) => {
  return (
    <div>
      {userTwo.length > 0 ? (
        userTwo.map((user, index) => (
          <div key={user.id} className="User__Two-Wrapper">
            <div>
              {index + 1} {user.name}
            </div>
            <p>{user.email}</p>
            <div className="User__Two-Wrapper-Button">
              <Button
                variant="middle"
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
