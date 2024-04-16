import AuthPage from "../pages/AuthPage/AuthPage";
import LibraryCatalogPage from "../pages/LibraryCatalogPage/LibraryCatalogPage";
import LibraryInfoPage from "../pages/LibraryInfoPage/LibraryInfoPage";
import MyBooks from "../pages/MyBooksPage/MyBooks";
import StaticPage from "../pages/StaticPage/StaticPage";
import { CATALOG, INFO, MYBOOKS, STATIC } from "../utils/const";

export const routes = [
  {
    path: CATALOG,
    Component: LibraryCatalogPage,
  },

  {
    path: MYBOOKS,
    Component: MyBooks,
  },

  {
    path: INFO,
    Component: LibraryInfoPage,
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
