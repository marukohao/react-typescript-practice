"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var header_1 = require("./header");
var custom_date_1 = require("./custom-date");
var fruit_loops_1 = require("./fruit-loops");
var fruit = [
    "red",
    "blue",
    "yellow",
    "green",
    "pink"
];
ReactDOM.render(React.createElement("div", null,
    React.createElement(header_1.default, { text: "hello" }),
    React.createElement(custom_date_1.default, null),
    React.createElement(fruit_loops_1.default, { fruit: fruit })), document.querySelector("#root"));
