import Button from "../../components/UI/Button/Button.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Hr from "../../components/UI/Hr/Hr.jsx";
import MyTable from "../../components/UI/Table/MyTable.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
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
      <Hr />
      <MyTable rows={rows} isBorder={true} columns={columns} />
      <Wrapper>
        <Button
          isFullWidth={true}
          variant={"purple"}
          onClick={handlerRemoveStatic}
        >
          Сброс статистики
        </Button>
      </Wrapper>
    </Container>
  );
};

export default StaticPage;
