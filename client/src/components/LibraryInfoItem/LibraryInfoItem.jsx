import Button from "../../components/UI/Button/Button.jsx";
import { ButtonsStateGroup, ButtonsStateWrapper } from "./styles.js";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";
import SubTitle from "../UI/SubTitle/SubTitle.jsx";
import Hr from "../UI/Hr/Hr.jsx";

const LibraryInfoItem = ({
  oneBook,
  isCheck,
  isAvailableCheck,
  isOnHandsCheck,
  changeAddMyBook,
}) => {
  const hasIsLength = oneBook.length !== 0;

  return (
    <>
      {hasIsLength ? (
        <div>
          <SubTitle>{oneBook.title}</SubTitle>
          <Hr />
          <div>{oneBook.body}</div>
          <ButtonsStateGroup>
            <ButtonsStateWrapper>
              <Button
                isFullWidth
                variant={isCheck ? "dark-purple" : "middle-purple"}
              >
                {isAvailableCheck}
              </Button>
            </ButtonsStateWrapper>

            <ButtonsStateWrapper>
              <Button
                isFullWidth
                variant={isCheck ? "dark-purple" : "middle-purple"}
              >
                {isOnHandsCheck}
              </Button>
            </ButtonsStateWrapper>
          </ButtonsStateGroup>

          <Wrapper>
            <Button
              isFullWidth
              isDisabled={isCheck}
              height={"h-2"}
              variant={"light-purple"}
              onClick={changeAddMyBook}
            >
              {isCheck ? `Added to вMyBooks` : `Add to MyBooks`}
            </Button>
          </Wrapper>
        </div>
      ) : (
        <SubTitle>No information about the book</SubTitle>
      )}
    </>
  );
};

export default LibraryInfoItem;
