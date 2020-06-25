// import React from "react"

function Header() {
    return React.createElement(
        "header",
        { className: "mg-header" },
        React.createElement("img", {
            src: "./logo.png",
            alt: "meme portlet"
        }),
        React.createElement(
            "p",
            null,
            "Awesome Meme Portlet!"
        )
    );
}

export default Header;