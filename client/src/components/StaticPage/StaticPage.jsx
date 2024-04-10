import "./StaticPage.scss";
import Table from "./MyTable";
import { Button } from "antd";

const StaticPage = () => {
  const deletedStatic = () => {
    window.location.reload();
  };

  return (
    <div className="Static__Container">
      <h1>Статистика</h1>
      <hr />
      <Table />
      <div style={{ textAlign: "center" }}>
        <Button onClick={deletedStatic}>Сброс статистики</Button>
      </div>
    </div>
  );
};

export default StaticPage;
