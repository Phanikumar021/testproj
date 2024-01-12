const element=React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"sibling"},"child one"),React.createElement("h2",{id:"sibling"},"child two")]);
const root=ReactDOM.createRoot(document.getElementById("test"));
root.render(element);