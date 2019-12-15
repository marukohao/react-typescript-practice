"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function CustomDate() {
    var _a = React.useState(""), date = _a[0], setDate = _a[1];
    var handleClick = function () {
        setDate(new Date().toTimeString());
    };
    return (React.createElement("div", null,
        date,
        React.createElement("button", { onClick: handleClick }, "Get the Date")));
}
exports.default = CustomDate;
