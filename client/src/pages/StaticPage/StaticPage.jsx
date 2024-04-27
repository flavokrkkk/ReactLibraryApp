import Button from "../../components/UI/Button/Button.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Hr from "../../components/UI/Hr/Hr.jsx";
import MyTable from "../../components/UI/Table/MyTable.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import { useSelector } from "react-redux";

const StaticPage = () => {
  const handleDeleteStatic = () => {
    window.location.reload();
  };

  const books = useSelector((state) => state.books.books);
  const users = useSelector((state) => state.users.users);
  const userTwo = useSelector((state) => state.usersTwo.usersTwo);

  const rowsData = [
    { id: 1, info: books.length, body: "books" },
    { id: 2, info: users.length + userTwo.length, body: "users" },
    { id: 3, info: users.length, body: "books" },
    { id: 4, info: userTwo.length, body: "books" },
  ];

  const columnsData = [
    { id: 1, title: "Catalog" },
    { id: 2, title: "Users" },
    { id: 3, title: "Favorites" },
    { id: 4, title: "MyBook" },
  ];

  return (
    <Container>
      <Title>Statistics</Title>
      <Hr />
      <MyTable rows={rowsData} isBorder columns={columnsData} />
      <Wrapper>
        <Button isFullWidth variant={"purple"} onClick={handleDeleteStatic}>
          Reset statistics
        </Button>
      </Wrapper>
    </Container>
  );
};

export default StaticPage;
