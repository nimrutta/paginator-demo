import React from "react";
import IPFPaginator from "../lib";

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
  </div>
);

export default App;
