import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./routes/AppRouter";
import { pages } from "./utils/mockData";

function App() {
  return (
    <>
      <NavBar pages={pages} bg={"light-purple"} />
      <AppRouter />
    </>
  );
}

export default App;
