import React from "react";

const Header = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.description ? props.description : null}</p>
        </>
    )
}

export default Header