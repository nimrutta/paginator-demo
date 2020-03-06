import React from "react";
import IPFPaginator from "../lib";

const renderCustomRow = (rowData, index) => (
  <tr key={index}>
    {
      Object.entries(rowData).map(([key, value]) => {
        if(key == 'skills')
          return (
            <td key={`td${key}`}>
              <ul> { value.map((skill, index) => 
                  <li key={index}>{skill}</li>
                )}
              </ul>
            </td>
          );

        return <td key={`td${key}`}>{value}</td>
      })
    }
  </tr>
);

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Billionaires list</h1>
    <IPFPaginator data={["Sundar Pichai", "Satya Nadella", "Jeff Bezos"]} currentPage={5} totalCount={80} />

    <br /> <br />
    <h1>Users Table</h1>
    <IPFPaginator
      asTable 
      data={[{name: "Walter", age: "26"}, {name: "James", age: "12"}]} 
    />

    <br /> <br />
    <h1>User Skills Table</h1>
    <IPFPaginator
      asTable 
      data = {[{name: "Walter", skills: ["Eating", "Arguing"]}, {name: "James", skills: ["Fishing"]}]}
      renderCustomRow = {renderCustomRow}
    />
  </div>
);

export default App;
