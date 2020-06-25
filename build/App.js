// import React from "react"
// import Header from "./Header"
// import MemeGenerator from "./MemeGenerator"
import Header from "./Header.js";
import MemeGenerator from "./MemeGenerator.js";

function App() {
    return React.createElement(
        "div",
        { id: "mg-app" },
        React.createElement(Header, null),
        React.createElement(MemeGenerator, null)
    );
}

export default App;