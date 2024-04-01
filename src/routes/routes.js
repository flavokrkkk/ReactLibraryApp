import LibraryCatalog from "../components/Library/LibraryCatalog";
import LibraryPage from "../components/LibraryPage/LibraryPage";
import MyBooks from "../components/MyBooks/MyBooks";
import StaticPage from "../components/StaticPage/StaticPage";
import { CATALOG, INFO, MYBOOKS, STATIC } from "../utils/const";

export const routes = [
    {
        path: CATALOG,
        Component: LibraryCatalog
    },

    {
        path: MYBOOKS,
        Component: MyBooks
    },

    {
        path: INFO,
        Component: LibraryPage
    },

    {
        path: STATIC,
        Component: StaticPage
    },

]