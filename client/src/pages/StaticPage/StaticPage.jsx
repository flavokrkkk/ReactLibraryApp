import Button from "../../components/UI/Button/Button";
import MyTable from "../../components/UI/Table/MyTable";
import "./StaticPage.scss";

const StaticPage = () => {
  const deletedStatic = () => {
    window.location.reload();
  };

  return (
    <div className="Static__Container">
      <h1>Статистика</h1>
      <hr />
      <MyTable />
      <div className="Removed__Static">
        <Button onClick={deletedStatic}>Сброс статистики</Button>
      </div>
    </div>
  );
};

export default StaticPage;
