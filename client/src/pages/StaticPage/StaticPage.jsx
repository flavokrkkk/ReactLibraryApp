import Button from "../../components/UI/Button/Button.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Hr from "../../components/UI/Hr/Hr.jsx";
import MyTable from "../../components/UI/Table/MyTable.jsx";
import Title from "../../components/UI/Title/Title.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import { calculateSelectors } from "../../store/selectors/selectors.js";
import { columnsData } from "../../utils/mockData.js";
import { useSelector } from "react-redux";

const StaticPage = () => {
  const handleDeleteStatic = () => {
    window.location.reload();
  };

  const rowsData = useSelector(calculateSelectors.rowsData);

  return (
    <Container>
      <Title>Statistics</Title>
      <Hr />
      <MyTable rows={rowsData} isBorder columns={columnsData} />
      <Wrapper>
        <Button isFullWidth variant={"purple"} onClick={handleDeleteStatic}>
          Reset statistics
        </Button>
      </Wrapper>
    </Container>
  );
};

export default StaticPage;
