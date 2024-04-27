import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button.jsx";
import { BookCard, BookCardDescription, BookCardTitle } from "./styles.js";

const LibraryCatalogList = ({ book, index }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/info/${book.id}`);
  };

  return (
    <BookCard>
      <BookCardTitle>{`${index + 1}. ${book.title}`}</BookCardTitle>
      <BookCardDescription>{book.body}</BookCardDescription>
      <div>
        <h3>Online library S-book</h3>
      </div>
      <div>
        <Button
          height={"h-2"}
          variant={"light-purple"}
          onClick={handleNavigation}
        >
          I want to read
        </Button>
      </div>
    </BookCard>
  );
};

export default LibraryCatalogList;
