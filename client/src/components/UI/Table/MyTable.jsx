import "./MyTable.scss";

const MyTable = ({ children }) => {
  return (
    <div className="table">
      <table class="table_col">{children}</table>
    </div>
  );
};

export default MyTable;
