import { useEffect } from "react";
import { useAction } from "../../../store";
import "./Pagination.scss";

const Pagination = ({ currentPage }) => {
  const pages = [1, 2, 3, 4, 5];

  const { setCurrentPage } = useAction();
  console.log("curr", currentPage);

  useEffect(() => {}, [pages]);
  return (
    <div className="pages">
      {pages.map((page) => (
        <span
          className={currentPage == page ? "current__page" : "page"}
          key={page.id}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
