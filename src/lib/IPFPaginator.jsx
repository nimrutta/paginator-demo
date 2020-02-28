import React from 'react';
import Paginator from "./components/Paginator";

function validateData(data) {
    return !data.some(item => typeof item !== "object");
}

function IPFPaginator({data, dataType = 'data', asTable, renderItem, className, ...paginatorProps}){
    function renderDataItem(item, index){
        if(typeof renderItem === 'function')
            return renderItem(item, index);
        else
            return <span key={index}>{item}</span>
    }

    function renderDataItems() {
        if(!data)
            return;
        else if(!data.length)
            return <span>No {dataType} found.</span>

        return data.map((item, index) => renderDataItem(item, index))
    }

    function renderTableRow(rowData, index){
        if(typeof renderItem === 'function')
            return renderItem(rowData, index);
        else
            return (
                <tr key={index}>
                    {
                        Object.entries(rowData).map(([key, value]) => (
                            <td key={`td${key}`}>{value}</td>
                        ))
                    }
                </tr>
            );
    }
    
    function renderTableBody() {
        return (
            <tbody>
                { data.length < 1 && 
                    ( <tr><td>No {dataType} found.</td></tr> ) 
                }

                {
                    data.map((item, index) => renderTableRow(item, index))
                }
            </tbody>
        );
    }
    
    function renderTableHead() {
        return (
            <thead>
                <tr>
                    {
                        Object.entries(data[0]).map(([key]) => (
                            <th key={`th${key}`}>{key}</th>
                        ))
                    }
                </tr>
            </thead>
        );
    }
    
    function renderTable() {
        if(!data) return null;

        if(!validateData(data)){
            throw(new Error('Some error!'));
        }

        return (
            <table className={className}>
                { renderTableHead() }
                { renderTableBody() }
            </table>
        );
    }

    return (
        <React.Fragment>
            { !asTable && renderDataItems() }

            { asTable && renderTable() }

            <Paginator {...paginatorProps} />
        </React.Fragment>
    );
}

export default IPFPaginator;
