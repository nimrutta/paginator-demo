import React from "react";
import { Paginator } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Users list</h1>
    <Paginator currentPage={5} totalCount={80} />
  </div>
);

export default App;
