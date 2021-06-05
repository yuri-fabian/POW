import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNUmbres = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNUmbres.push(i);
  }
  return (
    <section id="pagination">
      <ul className="pages">
        {pageNUmbres.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;
