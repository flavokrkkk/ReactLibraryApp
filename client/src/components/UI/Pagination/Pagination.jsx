import { useAction } from "../../../store";
import "./Pagination.scss";

const Pagination = ({ currentPage }) => {
  const pages = [1, 2, 3, 4, 5];

  const { setCurrentPage } = useAction();

  return (
    <div className="pages">
      {pages.map((page, index) => (
        <span
          className={currentPage == page ? "current__page" : "page"}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
