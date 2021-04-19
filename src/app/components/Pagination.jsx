import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changePagination } from "../../redux/actions/teammates";

const Pagination = ({list, items}) => {
  const [paginationItems, setPaginationitems] = useState([]);
  const [changePage, setChangepage] = useState(1);

  const { paginated, currentPage, totalPages } = useSelector(
    (state) => state.teammates
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changePagination({ list: list, currentPage: changePage, itemsPerPage: items }));
  }, [dispatch, changePage]);

  useEffect(() => {
    let items = [];
    for (let x = 1; x <= totalPages; x++) {
      items.push(
        <li
          className={"page-item" + (currentPage === x ? " disabled" : "")}
          key={x}
        >
          <button className="page-link" onClick={() => setChangepage(x)}>
            {x}
          </button>
        </li>
      );
    }
    setPaginationitems(items);
  }, [paginated, changePage, currentPage, totalPages]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={"page-item" + (currentPage === 1 ? " disabled" : "")}>
          <button
            className="page-link"
            href="/#"
            onClick={() => setChangepage(1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {paginationItems}
        <li
          className={
            "page-item" + (currentPage === totalPages ? " disabled" : "")
          }
        >
          <button
            className="page-link"
            onClick={() => setChangepage(totalPages)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
