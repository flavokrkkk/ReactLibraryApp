import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import { useAction } from "../../store";
import LibraryUserList from "../../components/LibraryUserList/LibraryUserList.jsx";
import Container from "../../components/Container/Container.jsx";
import Title from "../../components/Title/Title.jsx";
import LibraryInfoItem from "../../components/LibraryInfoItem/LibraryInfoItem.jsx";

const LibraryInfoPage = () => {
  //Целпяем id с поисковой строки
  const params = useParams();

  const { addMyBooksAction, addUserTwoAction } = useAction();

  //Состояние для disabled кнопки
  const [inMyBooks, setInMyBooks] = useState(false);

  //Получаем данные из store
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status.status);
  const oneBook = useSelector((state) => state.oneBook.oneBook);
  const myBook = useSelector((state) => state.myBook.myBook);

  //Логика по disabled кнопки
  const myBooksId = (id) => {
    let isBool = false;
    myBook.forEach((el) => {
      if (el.id === id) {
        isBool = true;
      }
    });
    return isBool;
  };

  //Уменьшаем кол-во бизнес логики
  const isCheck =
    myBooksId(oneBook.id) === true || oneBook.isAvailable === false;
  const isAvailableCheck = oneBook.isAvailable ? "Доступна" : "Недоступна";
  const isOnHandsCheck = status.isOnHands ? "На руках" : "Доступна";

  //Функция добавления книги в myBook
  const changeAddMyBook = () => {
    if (inMyBooks) {
      alert("Книга уже добавлена!");
    }
    addMyBooksAction(oneBook);
    addUserTwoAction({
      id: 101,
      name: "Egor Yarovitsyn",
      email: "egoryarovitsyn1@gmail.com",
    });
    setInMyBooks(true);
  };

  useEffect(() => {
    dispatch(fetchUsers(10, 1));
    dispatch(getOneBook(params.id));
  }, []);

  useEffect(() => {
    setInMyBooks();
  }, [inMyBooks]);

  return (
    <Container>
      <Title>Информация о книге</Title>
      <LibraryInfoItem
        changeAddMyBook={changeAddMyBook}
        isCheck={isCheck}
        isOnHandsCheck={isOnHandsCheck}
        isAvailableCheck={isAvailableCheck}
        oneBook={oneBook}
      />
      <LibraryUserList status={status} oneBook={oneBook} />
    </Container>
  );
};

export default LibraryInfoPage;
