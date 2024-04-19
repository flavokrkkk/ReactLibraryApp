import "./StaticPage.scss";
// import Table from "./MyTable";

const StaticPage = () => {
  const deletedStatic = () => {
    window.location.reload();
  };

  return (
    <div className="Static__Container">
      <h1>Статистика</h1>
      <hr />
      {/* <Table /> */}
      <div style={{ textAlign: "center" }}>
        <button onClick={deletedStatic}>Сброс статистики</button>
      </div>
    </div>
  );
};

export default StaticPage;
