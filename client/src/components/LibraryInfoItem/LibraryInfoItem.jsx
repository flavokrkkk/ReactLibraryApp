import Button from "../../components/UI/Button/Button.jsx";
import * as S from "./styles.js";
import * as C from "../../styles/components.js";

const LibraryInfoItem = ({
  oneBook,
  isCheck,
  isAvailableCheck,
  isOnHandsCheck,
  changeAddMyBook,
}) => {
  return (
    <>
      {oneBook.length !== 0 ? (
        <div>
          <C.SubTitle>{oneBook.title}</C.SubTitle>
          <C.Hr />
          <div>{oneBook.body}</div>
          <S.ButtonsStateGroup>
            <S.ButtonsStateWrapper>
              <Button
                isFullWidth={true}
                variant={isCheck ? "dark-purple" : "middle-purple"}
              >
                {isAvailableCheck}
              </Button>
            </S.ButtonsStateWrapper>

            <S.ButtonsStateWrapper>
              <Button
                isFullWidth={true}
                variant={isCheck ? "dark-purple" : "middle-purple"}
              >
                {isOnHandsCheck}
              </Button>
            </S.ButtonsStateWrapper>
          </S.ButtonsStateGroup>

          <C.Wrapper>
            {isCheck ? (
              <Button
                height={"h-2"}
                isFullWidth={true}
                variant={"light-purple"}
                isDisabled={true}
              >
                Добавлена в MyBooks
              </Button>
            ) : (
              <Button
                height={"h-2"}
                isFullWidth={true}
                variant={"light-purple"}
                onClick={changeAddMyBook}
              >
                Добавить в MyBooks
              </Button>
            )}
          </C.Wrapper>
        </div>
      ) : (
        <C.SubTitle>Информация о книге отсутсвует</C.SubTitle>
      )}
    </>
  );
};

export default LibraryInfoItem;
