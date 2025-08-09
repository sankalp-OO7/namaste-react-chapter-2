import React from "react"
import ReactDOM from "react-dom/client"

const he = React.createElement("div",
    {id:"section"},
    React.createElement("h1",
        {id:"heading"},
        "hossssssdddssla"
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(he)
