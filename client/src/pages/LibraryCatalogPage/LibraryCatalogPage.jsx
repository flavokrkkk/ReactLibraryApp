import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LibraryCatalogPage.scss";
import { fetchMovies } from "../../store/asyncActions/asyncData";
import Error from "../../components/Error/Error";
import Loader from "../../components/UI/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import LibraryCatalogCard from "../../components/LibraryCatalogCard/LibraryCatalogCard";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";

const LibraryCatalogPage = () => {
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
    <Container>
      <Title>Каталог</Title>
      <div className="library__catalog-wrapper">
        <Input
          value={value}
          isFullWidth={true}
          border={"b-red-2"}
          onChange={onChange}
          isOutline={true}
          placeholder={"Поиск..."}
        />
      </div>
      <hr />
      <LibraryCatalogCard searchAndSortedBook={searchAndSortedBook} />
    </Container>
  );
};

export default LibraryCatalogPage;
