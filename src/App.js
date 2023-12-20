import React, { useState } from "react";
import "./App.css";
import Child from "./Child";
function App() {
  const [arr, setArr] = useState([
    { name: "bhargav", status: false },
    { name: "sai", status: false },
    { name: "brijesh", status: false },
    { name: "harshitha", status: false },
    { name: "eshwar", status: false },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const HandleComplete = (i) => {
    let temp = [...arr];
    temp[i].status = !temp[i].status;
    setArr([...temp]);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child arr={arr} HandleComplete={HandleComplete} />
    </div>
  );
}

export default App;
