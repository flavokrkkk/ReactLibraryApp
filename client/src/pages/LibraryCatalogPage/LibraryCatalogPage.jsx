import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/asyncActions/asyncData";
import Error from "../../components/Error/Error.jsx";
import Loader from "../../components/UI/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import LibraryCatalogCard from "../../components/LibraryCatalogCard/LibraryCatalogCard.jsx";
import * as C from "../../styles/components.js";
import Container from "../../components/Container/Container.jsx";
import Title from "../../components/Title/Title.jsx";

const LibraryCatalogPage = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  //Получаем отсортированный список книг
  const books = useSelector((state) => state.books.books).sort();

  //Получаем состояние для идентификатора загрузки
  const isLoading = useSelector((state) => state.books.isLoading);

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
    dispatch(fetchBooks(1, 20));
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Title>Каталог</Title>
      <C.Wrapper>
        <Input
          value={value}
          isFullWidth={true}
          border={"b-red-2"}
          onChange={onChange}
          isOutline={true}
          placeholder={"Поиск..."}
        />
      </C.Wrapper>
      <C.Hr />
      <LibraryCatalogCard searchAndSortedBook={searchAndSortedBook} />
    </Container>
  );
};

export default LibraryCatalogPage;
