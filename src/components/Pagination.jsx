import React from 'react';
import propTypes from 'prop-types';
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);
    if(itemsCount === 0 ) return <p>Please wait...</p>
    return (
      <nav >
        <ul className="pagination">
          {pages.map((page) => (
            <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
}
 
Pagination.propTypes = {
  itemsCount : propTypes.number.isRequired,
  pageSize : propTypes.number.isRequired,
  currentPage : propTypes.number.isRequired,
  onPageChange : propTypes.func.isRequired
};

export default Pagination;