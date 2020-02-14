import React from "react";
import PropTypes from "prop-types";
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';

import "./styles.css";

const Paginator = ({currentPage = 1, totalCount, itemsPerPage = 15, onPageChanged}) => (
  <Pagination 
    defaultCurrent={currentPage} 
    total={totalCount}
    showQuickJumper
    showSizeChanger
    defaultPageSize={itemsPerPage}
    locale={localeInfo}
    onChange={onPageChanged} />
);

export default Paginator;

Paginator.proptypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChanged: PropTypes.number,
}

Paginator.defaultProps = {
  onPageChanged: () => {}
}