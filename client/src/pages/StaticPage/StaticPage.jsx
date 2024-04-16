import Button from "../../components/UI/Button/Button";
import MyTable from "../../components/UI/Table/MyTable";
import "./StaticPage.scss";
import { useSelector } from "react-redux";

const StaticPage = () => {
  const deletedStatic = () => {
    window.location.reload();
  };

  const books = useSelector((state) => state.books.books);
  const users = useSelector((state) => state.users.users);
  const userTwo = useSelector((state) => state.usersTwo.usersTwo);

  const columns = [
    { id: 1, title: "Каталог" },
    { id: 2, title: "Пользователи" },
    { id: 3, title: "Избранное" },
    { id: 4, title: "MyBook" },
  ];

  const rows = [
    { id: 1, info: books.length, body: "книг" },
    { id: 2, info: users.length + userTwo.length, body: "пользователей" },
    { id: 3, info: users.length, body: "книг" },
    { id: 4, info: userTwo.length, body: "книг" },
  ];

  return (
    <div className="Static__Container">
      <h1>Статистика</h1>
      <hr />
      <MyTable rows={rows} columns={columns} />
      <div className="Removed__Static">
        <Button onClick={deletedStatic}>Сброс статистики</Button>
      </div>
    </div>
  );
};

export default StaticPage;
