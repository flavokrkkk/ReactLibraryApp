import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import { useAction } from "../../store";
import LibraryUserList from "../../components/LibraryUserList/LibraryUserList.jsx";
import LibraryInfoItem from "../../components/LibraryInfoItem/LibraryInfoItem.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import { customer } from "../../utils/mockData.js";
import {
  myBookSelectors,
  oneBookSelectors,
  statusSelectors,
} from "../../store/selectors/selectors.js";

const LibraryInfoPage = () => {
  const params = useParams();

  const { addMyBooksAction, addUserTwoAction } = useAction();

  const [inMyBooks, setInMyBooks] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector(statusSelectors.getStatus);
  const oneBook = useSelector(oneBookSelectors.getOneBook);
  const myBook = useSelector(myBookSelectors.getMyBooks);

  const checkBookId = (id) => {
    let isBool = false;
    myBook.forEach((el) => {
      if (el.id === id) {
        isBool = true;
      }
    });
    return isBool;
  };

  const isCheck =
    checkBookId(oneBook.id) === true || oneBook.isAvailable === false;
  const isAvailableCheck = oneBook.isAvailable ? "Available" : "Not available";
  const isOnHandsCheck = status.isOnHands ? "On hands" : "Available";

  const changeAddMyBook = () => {
    if (inMyBooks) {
      alert("The book has already been added!");
    }
    addMyBooksAction(oneBook);
    addUserTwoAction(customer);
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
      <Title>Book information</Title>
      <LibraryInfoItem
        isCheck={isCheck}
        isOnHandsCheck={isOnHandsCheck}
        isAvailableCheck={isAvailableCheck}
        oneBook={oneBook}
        changeAddMyBook={changeAddMyBook}
      />
      <LibraryUserList status={status} oneBook={oneBook} />
    </Container>
  );
};

export default LibraryInfoPage;
