import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LibraryCatalog.scss";
import { fetchMovies } from "../../store/asyncActions/asyncData";
import LibraryCatalogList from "../../components/LibraryCatalogList/LibraryCatalogList";
import Error from "../../components/Error/Error";
import Loader from "../../components/UI/Loader/Loader";
import Input from "../../components/UI/Input/Input";

const LibraryCatalog = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  //Получаем отсортированный список книг
  const books = useSelector((state) => state.books.books).sort();

  //Получаем состояние для идентификатора загрузки
  const loading = useSelector((state) => state.books.loading);

  //Получаем состояние для обработки ошибок
  const error = useSelector((state) => state.books.error);

  // Реализация поиска книг c помощью useMemo
  const searchAndSortedBook = useMemo(() => {
    return books
      .sort()
      .filter((book) => book.title.toLowerCase().includes(value.toLowerCase()));
  }, [value, books]);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Library__Catalog-Container">
      <div className="Library__Catalog-Wrapper">
        <h1 className="Library__Catalog-Title">Каталог</h1>
        <Input value={value} onChange={onChange} placeholder={"Поиск..."} />
        <hr />
        <LibraryCatalogList searchAndSortedBook={searchAndSortedBook} />
      </div>
    </div>
  );
};

export default LibraryCatalog;
