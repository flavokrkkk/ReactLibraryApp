import Container from "../../components/Container/Container.jsx";
import Title from "../../components/Title/Title.jsx";
import Button from "../../components/UI/Button/Button.jsx";
import MyTable from "../../components/UI/Table/MyTable.jsx";
import * as C from "../../styles/components.js";
import { useSelector } from "react-redux";

const StaticPage = () => {
  const handlerRemoveStatic = () => {
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
    <Container>
      <Title>Статистика</Title>
      <C.Hr />
      <MyTable rows={rows} isBorder={true} columns={columns} />
      <C.Wrapper>
        <Button
          isFullWidth={true}
          variant={"purple"}
          onClick={handlerRemoveStatic}
        >
          Сброс статистики
        </Button>
      </C.Wrapper>
    </Container>
  );
};

export default StaticPage;
