import LibraryCatalog from "../components/Library/LibraryCatalog";
import LibraryPage from "../components/LibraryPage/LibraryPage";
import MyBooks from "../components/MyBooks/MyBooks";

export const routes = [
    {
        path: '/catalog',
        Component: LibraryCatalog
    },

    {
        path: '/mybooks',
        Component: MyBooks
    },

    {
        path: '/info/:id',
        Component: LibraryPage
    }
]