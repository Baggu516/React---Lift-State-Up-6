import React from "react";

const Child = ({ arr, HandleComplete }) => {
  return (
    <div className="child">
      <h1>Children Component</h1>
      {arr &&
        arr.map((item, i) => {
          return (
            <div className="listofitems" key={i}>
              {item.status == true ? (
                <li>
                  <s>{item.name}</s>
                </li>
              ) : (
                <li style={{ color: "white" }}>{item.name}</li>
              )}
              <button onClick={() => HandleComplete(i)}>Complete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Child;
