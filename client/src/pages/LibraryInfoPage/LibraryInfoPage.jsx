import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LibraryInfoPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import { useAction } from "../../store";
import Button from "../../components/UI/Button/Button";
import LibraryUserList from "../../components/LibraryUserList/LibraryUserList";

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
          <h2>{oneBook.title}</h2>
          <hr />
          <div className="Library__Page-Descr-Bold">{oneBook.body}</div>
          <div
            className={
              check
                ? "Library__Page-Button-Available-No"
                : "Library__Page-Button-Group"
            }
          >
            <div className="Library__Page-Button-Wrapper">
              <Button
                isWidth={true}
                variant={check ? "dark-purple" : "middle-purple"}
              >
                {availableCheck}
              </Button>
            </div>

            <div className="Library__Page-Button-Wrapper">
              <Button
                isWidth={true}
                variant={check ? "dark-purple" : "middle-purple"}
              >
                {onHandsCheck}
              </Button>
            </div>
          </div>

          <div className="Library__Page-Button-Checked">
            {check ? (
              <Button
                height={"h-2"}
                isWidth={true}
                variant={"light-purple"}
                disabled
              >
                Добавлена в MyBooks
              </Button>
            ) : (
              <Button
                height={"h-2"}
                isWidth={true}
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
    </div>
  );
};

export default LibraryInfoPage;
