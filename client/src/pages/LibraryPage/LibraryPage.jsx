import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LibraryPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import UserList from "../../components/UserList/UserList";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button";

const LibraryPage = () => {
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
    let bool = false;
    myBook.forEach((el) => {
      if (el.id === id) {
        bool = true;
      }
    });
    return bool;
  };

  //Уменьшаем кол-во бизнес логики
  const check = myBooksId(oneBook.id) === true || oneBook.available === false;
  const availableCheck = oneBook.available ? "Доступна" : "Недоступна";
  const onHandsCheck = status.onHands ? "На руках" : "Доступна";

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
    <div className="Library__Page-Container">
      <div className="Library__Page-Main-Title">
        <h1>Информация о книге</h1>
      </div>

      {oneBook.length !== 0 ? (
        <div>
          <div className="Library__Page-Title">
            <h2>{oneBook.title}</h2>
          </div>
          <hr />
          <div className="Library__Page-Descr">{oneBook.body}</div>

          <div className="Library__Page-Descr-Bold">{oneBook.body}</div>

          <div
            className={
              check
                ? "Library__Page-Button-Available-No"
                : "Library__Page-Button-Group"
            }
          >
            <div className="Library__Page-Button-Available">
              <Button>{availableCheck}</Button>
            </div>

            <div className="Library__Page-Button-OnHands">
              <Button>{onHandsCheck}</Button>
            </div>
          </div>

          {check ? (
            <Button disabled>Добавлена в MyBooks</Button>
          ) : (
            <Button onClick={addMyBook}>Добавить в MyBooks</Button>
          )}
        </div>
      ) : (
        <h2>Информация о книге отсутсвует</h2>
      )}
      <UserList status={status} oneBook={oneBook} />
    </div>
  );
};

export default LibraryPage;
