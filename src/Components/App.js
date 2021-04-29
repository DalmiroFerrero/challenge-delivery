import React from "react";
import States from "./States/States";
import Table from "./Table/Table";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>DeliveryApp</h1>
      <States />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
