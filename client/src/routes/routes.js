import AuthPage from "../pages/AuthPage/AuthPage";
import LibraryCatalog from "../pages/LibraryCatalog/LibraryCatalog";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import MyBooks from "../pages/MyBooksPage/MyBooks";
import StaticPage from "../pages/StaticPage/StaticPage";
import { CATALOG, INFO, MYBOOKS, STATIC } from "../utils/const";

export const routes = [
  {
    path: CATALOG,
    Component: LibraryCatalog,
  },

  {
    path: MYBOOKS,
    Component: MyBooks,
  },

  {
    path: INFO,
    Component: LibraryPage,
  },

  {
    path: STATIC,
    Component: StaticPage,
  },

  {
    path: "/auth",
    Component: AuthPage,
  },
];
