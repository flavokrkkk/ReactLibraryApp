import TableList from "../../components/TableList/TableList";
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

  //Данные для таблицы
  const tableStaticTd = [
    { id: 1, data: books.length, title: "книг" },
    {
      id: 2,
      data: users.length + userTwo.length,
      title: "пользователей онлайн",
    },
    { id: 3, data: users.length, title: "книжки в избранном" },
    { id: 4, data: userTwo.length, title: "кол-во книг в MyBook" },
  ];

  const tableStaticTh = [
    { id: 1, title: "Каталог" },
    { id: 2, title: "Пользователи" },
    { id: 3, title: "Избранное" },
    { id: 4, title: "MyBook" },
  ];

  return (
    <div className="Static__Container">
      <h1>Статистика</h1>
      <hr />
      <MyTable>
        <TableList data={tableStaticTd} title={tableStaticTh} />
      </MyTable>
      <div className="Removed__Static">
        <Button onClick={deletedStatic}>Сброс статистики</Button>
      </div>
    </div>
  );
};

export default StaticPage;
