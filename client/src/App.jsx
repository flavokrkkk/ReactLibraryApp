import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";
import { AUTH, CATALOG, MYBOOKS } from "./utils/const";

function App() {
  const pages = [
    { id: 1, page: "S-book", route: AUTH },
    { id: 2, page: "Catalog", route: CATALOG },
    { id: 3, page: "MyBooks", route: MYBOOKS },
  ];

  return (
    <>
      <NavBar pages={pages} bg={"light-purple"} />
      <AppRouter />
    </>
  );
}

export default App;
