var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Paginator from "./components/Paginator";

function validateData(data) {
    return !data.some(function (item) {
        return (typeof item === "undefined" ? "undefined" : _typeof(item)) !== "object";
    });
}

function IPFPaginator(_ref) {
    var data = _ref.data,
        _ref$dataType = _ref.dataType,
        dataType = _ref$dataType === undefined ? 'data' : _ref$dataType,
        asTable = _ref.asTable,
        renderItem = _ref.renderItem,
        renderCustomRow = _ref.renderCustomRow,
        className = _ref.className,
        paginatorProps = _objectWithoutProperties(_ref, ["data", "dataType", "asTable", "renderItem", "renderCustomRow", "className"]);

    function renderDataItem(item, index) {
        if (typeof renderItem === 'function') return renderItem(item, index);else return React.createElement(
            "span",
            { key: index },
            item
        );
    }

    function renderDataItems() {
        if (!data) return;else if (!data.length) return React.createElement(
            "span",
            null,
            "No ",
            dataType,
            " found."
        );

        return data.map(function (item, index) {
            return renderDataItem(item, index);
        });
    }

    function renderTableRow(rowData, index) {
        if (typeof renderCustomRow === 'function') return renderCustomRow(rowData, index);else return React.createElement(
            "tr",
            { key: index },
            Object.entries(rowData).map(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                    key = _ref3[0],
                    value = _ref3[1];

                return React.createElement(
                    "td",
                    { key: "td" + key },
                    value
                );
            })
        );
    }

    function renderTableBody() {
        return React.createElement(
            "tbody",
            null,
            data.length < 1 && React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    "No ",
                    dataType,
                    " found."
                )
            ),
            data.map(function (item, index) {
                return renderTableRow(item, index);
            })
        );
    }

    function renderTableHead() {
        return React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                Object.entries(data[0]).map(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 1),
                        key = _ref5[0];

                    return React.createElement(
                        "th",
                        { key: "th" + key },
                        key
                    );
                })
            )
        );
    }

    function renderTable() {
        if (!data) return null;

        if (!validateData(data)) {
            throw new Error('Some error!');
        }

        return React.createElement(
            "table",
            { className: className },
            renderTableHead(),
            renderTableBody()
        );
    }

    return React.createElement(
        React.Fragment,
        null,
        !asTable && renderDataItems(),
        asTable && renderTable(),
        React.createElement(Paginator, paginatorProps)
    );
}

export default IPFPaginator;