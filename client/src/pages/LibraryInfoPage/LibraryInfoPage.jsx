import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getOneBook } from "../../store/asyncActions/asyncData";
import { useAction } from "../../store";
import LibraryUserList from "../../components/LibraryUserList/LibraryUserList.jsx";
import LibraryInfoItem from "../../components/LibraryInfoItem/LibraryInfoItem.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Title from "../../components/UI/Title/Title.jsx";

const LibraryInfoPage = () => {
  const params = useParams();

  const { addMyBooksAction, addUserTwoAction } = useAction();

  const [inMyBooks, setInMyBooks] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.status.status);
  const oneBook = useSelector((state) => state.oneBook.oneBook);
  const myBook = useSelector((state) => state.myBook.myBook);

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
    addUserTwoAction({
      id: 101,
      name: "Egor Yarovitsyn",
      email: "egoryarovitsyn1@gmail.com",
    });
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
        changeAddMyBook={changeAddMyBook}
        isCheck={isCheck}
        isOnHandsCheck={isOnHandsCheck}
        isAvailableCheck={isAvailableCheck}
        oneBook={oneBook}
      />
      <LibraryUserList status={status} oneBook={oneBook} />
    </Container>
  );
};

export default LibraryInfoPage;
