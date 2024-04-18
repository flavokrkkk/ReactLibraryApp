import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";
import { AUTH, CATALOG, MYBOOKS } from "./utils/const";
import "./App.scss";

function App() {
  const pages = [
    { id: 1, page: "Sbook", route: AUTH },
    { id: 2, page: "Каталог", route: CATALOG },
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
