import React from "react";
import ReactDOM from "react-dom/client";

// using JSX
const headingElement = <h1>This is rendered through JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(headingElement)