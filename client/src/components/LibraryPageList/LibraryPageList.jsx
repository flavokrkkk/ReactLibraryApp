import { Button } from "antd";
import { useCallback } from "react";
import "./LibraryPageList.scss";

const LibraryPageList = ({ users, onRead, pushUserInMyBook, oneBook }) => {
  const actionWithUser = useCallback((user) => {
    pushUserInMyBook(user);
    onRead(user.id);
  }, []);

  return (
    <>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <div className="Library__Page-User">
              {index + 1}. {user.name}
              <p>{user.email}</p>
              {oneBook.available === true ? (
                <Button
                  className="Library__Page-User-Button"
                  onClick={() => actionWithUser(user)}
                >
                  push to myBook
                </Button>
              ) : (
                <Button disabled className="Library__Page-User-Button">
                  push to myBook
                </Button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryPageList;
