import React from 'react';
import Paginator from "./components/Paginator";

function IPFPaginator({data, dataType = 'data', renderItem, ...paginatorProps}){
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

    return (
        <React.Fragment>
            { renderDataItems() }

            <Paginator {...paginatorProps} />
        </React.Fragment>
    );
}

export default IPFPaginator;
