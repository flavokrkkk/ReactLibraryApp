import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";
import { AUTH, CATALOG, MYBOOKS } from "./utils/const";

function App() {
  const pages = [
    { id: 1, pages: "Sbook", route: AUTH },
    { id: 2, pages: "Каталог", route: CATALOG },
    { id: 3, pages: "MyBooks", route: MYBOOKS },
  ];

  return (
    <>
      <NavBar pages={pages} />
      <AppRouter />
    </>
  );
}

export default App;
