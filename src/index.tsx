import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./header";
import CustomDate from "./custom-date";
import FruitLoops from "./fruit-loops";

let fruit : Array<string> = [
    "red",
    "blue",
    "yellow",
    "green",
    "pink"
]

ReactDOM.render(
    <div>
        <Header text="hello" />
        <CustomDate />
        <FruitLoops fruit={fruit}/>
    </div>,
    document.querySelector("#root")
)