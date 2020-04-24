import React from "react";
import PropTypes from "prop-types";
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';

import "./styles.css";

var Paginator = function Paginator(_ref) {
  var _ref$currentPage = _ref.currentPage,
      currentPage = _ref$currentPage === undefined ? 1 : _ref$currentPage,
      totalCount = _ref.totalCount,
      _ref$itemsPerPage = _ref.itemsPerPage,
      itemsPerPage = _ref$itemsPerPage === undefined ? 15 : _ref$itemsPerPage,
      onPageChanged = _ref.onPageChanged;
  return React.createElement(Pagination, {
    defaultCurrent: currentPage,
    total: totalCount,
    showQuickJumper: true,
    showSizeChanger: true,
    defaultPageSize: itemsPerPage,
    locale: localeInfo,
    onChange: onPageChanged });
};

export default Paginator;

Paginator.proptypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChanged: PropTypes.number
};

Paginator.defaultProps = {
  onPageChanged: function onPageChanged() {}
};