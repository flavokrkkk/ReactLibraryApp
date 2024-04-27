import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/asyncActions/asyncData";
import Error from "../../components/Error/Error.jsx";
import Loader from "../../components/UI/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import LibraryCatalogCard from "../../components/LibraryCatalogCard/LibraryCatalogCard.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import Hr from "../../components/UI/Hr/Hr.jsx";

const LibraryCatalogPage = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books).sort();

  const isLoading = useSelector((state) => state.books.isLoading);

  const error = useSelector((state) => state.books.error);

  const memoizedSortedBook = useMemo(() => {
    return books
      .sort()
      .filter((book) => book.title.toLowerCase().includes(value.toLowerCase()));
  }, [value, books]);

  const handleInputChange = useCallback((e) => {
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
      <Title>Catalog</Title>
      <Wrapper>
        <Input
          value={value}
          isFullWidth
          border={"b-red-2"}
          onChange={handleInputChange}
          isOutline
          placeholder={"Search..."}
        />
      </Wrapper>
      <Hr />
      <LibraryCatalogCard memoizedSortedBook={memoizedSortedBook} />
    </Container>
  );
};

export default LibraryCatalogPage;
