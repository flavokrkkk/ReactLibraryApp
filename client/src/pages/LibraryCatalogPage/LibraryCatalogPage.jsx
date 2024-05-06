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
import { booksSelectors } from "../../store/selectors/selectors.js";

const LibraryCatalogPage = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const books = useSelector(booksSelectors.getBooks).sort();

  const isLoading = useSelector(booksSelectors.isLoading);

  const error = useSelector(booksSelectors.error);

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
          isFullWidth
          isOutline
          value={value}
          border={"b-red-2"}
          placeholder={"Search..."}
          onChange={handleInputChange}
        />
      </Wrapper>
      <Hr />
      <LibraryCatalogCard memoizedSortedBook={memoizedSortedBook} />
    </Container>
  );
};

export default LibraryCatalogPage;
