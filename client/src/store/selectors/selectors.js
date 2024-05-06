export const all = (state) => state;

export const booksSelectors = {
  getBooks: (state) => all(state).books.books,
  isLoading: (state) => all(state).books.isLoading,
  error: (state) => all(state).books.error,
};

export const statusSelectors = {
  getStatus: (state) => all(state).status.status,
};

export const usersSelectors = {
  getUsers: (state) => all(state).users.users,
};

export const myBookSelectors = {
  getMyBooks: (state) => all(state).myBook.myBook,
};

export const usersTwoSelectors = {
  getUsersTwo: (state) => all(state).usersTwo.usersTwo,
};

export const oneBookSelectors = {
  getOneBook: (state) => all(state).oneBook.oneBook,
};

export const calculateSelectors = {
  rowsData: (state) => {
    return [
      { id: 1, info: booksSelectors.getBooks(state).length, body: "books" },
      {
        id: 2,
        info:
          usersSelectors.getUsers(state).length +
          usersTwoSelectors.getUsersTwo(state).length,
        body: "users",
      },
      {
        id: 3,
        info: usersSelectors.getUsers(state).length,
        body: "favorites",
      },
      {
        id: 4,
        info: usersTwoSelectors.getUsersTwo(state).length,
        body: "in myBooks",
      },
    ];
  },
};
