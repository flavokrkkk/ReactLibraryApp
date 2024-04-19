const LibraryPageListTwo = ({ userTwo, removeUserinMyBook }) => {
  return (
    <>
      {userTwo.length > 0 ? (
        userTwo.map((user, index) => (
          <div key={index}>
            <div className="Libray__Page-User">
              {index + 1}. {user.name}
              <p>{user.email}</p>
              <button
                onClick={() => removeUserinMyBook(user.id)}
                className="Libray__Page-User-Button"
              >
                is Readed
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3>Пользователи еще не добавили книги!</h3>
      )}
    </>
  );
};

export default LibraryPageListTwo;
