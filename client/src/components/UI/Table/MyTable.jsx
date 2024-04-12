import "./MyTable.scss";
import { useSelector } from "react-redux";

const MyTable = () => {
  const books = useSelector((state) => state.books.books);
  const users = useSelector((state) => state.users.users);
  const userTwo = useSelector((state) => state.usersTwo.usersTwo);

  const calculations = {
    catalog: books.length,
    users: users.length + userTwo.length,
    favorites: users.length,
    myBook: userTwo.length,
  };

  return (
    <div className="table">
      <table class="table_col">
        <tr>
          <th>Каталог</th>
          <th>Пользователи</th>
          <th>Избранное</th>
          <th>MyBook</th>
        </tr>
        <tr>
          <td>{calculations.catalog} - книг</td>
          <td>{calculations.users} - пользователей онлайн</td>
          <td>{calculations.favorites} - книжки в избранном</td>
          <td>{calculations.myBook} - кол-во книг в MyBook</td>
        </tr>
      </table>
    </div>
  );
};

export default MyTable;
