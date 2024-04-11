import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LibraryPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import UserList from "../../components/UserList/UserList";
import { useAction } from "../../store";
import ButtonAdd from "../../components/UI/Button/ButtonAdd/ButtonAdd.jsx";

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

      {oneBook.lengh !== 0 ? (
        <div>
          <div className="Library__Page-Title">
            <h2>{oneBook.title}</h2>
          </div>
          <hr />
          <div className="Library__Page-Descr">{oneBook.body}</div>

          <div className="Library__Page-Descr-Bold">{oneBook.body}</div>

          <div className="Library__Page-Button-Group">
            {oneBook.available === true ? (
              <button className="Library__Page-Button-Status">Доступна</button>
            ) : (
              <button className="Library__Page-Button-Status-Disabled" disabled>
                Не доступна
              </button>
            )}
            {status.onHands === true ? (
              <button className="Library__Page-Button-Status-Disabled" disabled>
                На руках
              </button>
            ) : (
              <button className="Library__Page-Button-Status">На руках</button>
            )}
          </div>
          <ButtonAdd
            oneBook={oneBook}
            addMyBook={addMyBook}
            myBooksId={myBooksId}
          />
        </div>
      ) : (
        <h2>Информация о книге отсутсвует</h2>
      )}
      <UserList status={status} oneBook={oneBook} />
    </div>
  );
};

export default LibraryPage;
