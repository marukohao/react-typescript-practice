import * as React from "react";

type HeaderProps = {
    text: string
}

function Header (props: HeaderProps) {
    return (
    <h1>{props.text}</h1>
    )
}

export default Header;