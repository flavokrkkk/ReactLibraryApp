import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LibraryInfoPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button";
import LibraryUserList from "../../components/LibraryUserList/LibraryUserList";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";

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
  const isCheck = myBooksId(oneBook.id) === true || oneBook.available === false;
  const isAvailableCheck = oneBook.available ? "Доступна" : "Недоступна";
  const isOnHandsCheck = status.onHands ? "На руках" : "Доступна";

  //Функция добавления книги в myBook
  const addMyBook = () => {
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
    dispatch(fetchUsers(10));
    dispatch(getOneBook(params.id));
  }, []);

  useEffect(() => {
    setInMyBooks();
  }, [inMyBooks]);

  return (
    <Container>
      <Title>Информация о книге</Title>
      {oneBook.length !== 0 ? (
        <div>
          <h2 className="library__book-title">{oneBook.title}</h2>
          <hr />
          <div className="library__page-description-bold">{oneBook.body}</div>
          <div className="library__page-button-group">
            <div className="library__page-button-wrapper">
              <Button
                isFullWidth={true}
                variant={isCheck ? "dark-purple" : "middle-purple"}
              >
                {isAvailableCheck}
              </Button>
            </div>

            <div className="library__page-button-wrapper">
              <Button
                isFullWidth={true}
                variant={isCheck ? "dark-purple" : "middle-purple"}
              >
                {isOnHandsCheck}
              </Button>
            </div>
          </div>

          <div className="library__page-button-checked">
            {isCheck ? (
              <Button
                height={"h-2"}
                isFullWidth={true}
                variant={"light-purple"}
                isDisabled={true}
              >
                Добавлена в MyBooks
              </Button>
            ) : (
              <Button
                height={"h-2"}
                isFullWidth={true}
                variant={"light-purple"}
                onClick={addMyBook}
              >
                Добавить в MyBooks
              </Button>
            )}
          </div>
        </div>
      ) : (
        <h2>Информация о книге отсутсвует</h2>
      )}
      <LibraryUserList status={status} oneBook={oneBook} />
    </Container>
  );
};

export default LibraryInfoPage;
