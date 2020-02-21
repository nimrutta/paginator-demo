import React from "react";
import IPFPaginator from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Users list</h1>
    <IPFPaginator data={["Sundar Pichai", "Satya Nadella", "Jeff Bezos"]} currentPage={5} totalCount={80} />
  </div>
);

export default App;
