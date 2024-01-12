import React from "react";
import ReactDOM from "react-dom/client";

//creating a react element using react.create element

// const element = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "sibling" }, "child one"),
//   React.createElement("h2", { id: "sibling" }, "child two"),
// ]);

//functional component
const Component = () => {
  return (
    <div id="parent">
      <div>{element}</div>
      {console.log("component")}
      <h3 className="sibling">component element one</h3>
      <h3 className="sibling">component element two</h3>
    </div>
  );
};

const val = 12734;

//creating a react element using JSX

const element = (
  <div id="parent">
    <h2>parent id: {val}</h2>
    <h1 className="siblings">child 1</h1>
    <h1 className="siblings">child 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("test"));
root.render(<Component />); //virtual DOM gets initialized here
